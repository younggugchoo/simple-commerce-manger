import { Injectable,EventEmitter } from '@angular/core';
import { ScmDomain } from './scm-shared-util';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()


export class NoCounterService {

  
  constructor(private db:AngularFireDatabase) { 

  }
  get(domain:ScmDomain):Observable<number>{
    return this._getNumber$(domain).snapshotChanges().map(o=>o.payload.val()||0);
    //return this._getNumber$(domain).snapshotChanges().map(action => action.payload.val() || 0);
  }
  private _getNumber$(domain:ScmDomain){
    return this.db.object(`/numbers/${domain}`);
  }

  incAndGet(domain:ScmDomain):Observable<number>{
    const id$= new EventEmitter<number>();

    const onComplete = (err, comitted, dataSnapshot)=>{
      if (err) throw new Error('failed to increase number');
      if (comitted){
        id$.emit(dataSnapshot.val());
        id$.complete();
      }
    };

    this._getNumber$(domain).query.ref.transaction(num=>(num||0) +1, onComplete);
    return id$;
  }

  
}
