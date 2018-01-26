import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../../shared/data-store.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ActionMode } from '../../shared/scm-shared-util';
import { Category } from '../category.model';

@Component({
  selector: 'scm-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  subTitle:string;
  actionMode:ActionMode;
  categoryForm:FormGroup;

  constructor(private router:Router, 
              private route:ActivatedRoute,
              private database:DataStoreService,
              private fb:FormBuilder,
              private toastr:ToastsManager  ) { 
    this.initForm();                

  }

  initForm() {
    this.categoryForm = this.fb.group({
      no: [0],
      name: ['', Validators.required],
      desc: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      isUse: [true, Validators.required],
      createdTime: [ScmSharedUtil.getCurrentDateTime()],
      updatedTime: ['']
    });
  }

  resetForm(cat: Category) {
    this.categoryForm.reset({
      no: {value: cat.no, disabled: true},
      name: {value: cat.name, disabled: true},
      desc: {value: cat.desc, disabled: true},
      isUse: {value: cat.isUse, disabled: true},
      createdTime: {value: cat.createdTime, disabled: true},
      updatedTime: {value: cat.updatedTime, disabled: true},
    });
  }

  submit() {
    const category: Category = this.categoryForm.value;

    if ( this.actionMode === 'create' ) {
      const categoryFn = (no) => {
        category.no = no;
        return category;
      };
      this.database.create('category', categoryFn).subscribe(this._onSuccess(), this._onError());
      return;
    }

    category.updatedTime = ScmSharedUtil.getCurrentDateTime();
    this.database.update('category', category).then(this._onSuccess(), this._onError());
  }

  cancel() {
    this.redirectToCategoryList();
  }


  ngOnInit() {
    this.route.queryParams.filter(q => q['action'] !== undefined)
      .do(q => this._setActionMode(q))
      .switchMap(q => this.route.data)
      .filter((data: {category: Category}) => data.category !== null)
      .map((data: {category: Category}) => data.category)
      .subscribe(cat =>
        this.actionMode === 'read' ? this.resetForm(cat) : this.categoryForm.patchValue(cat)
      );
  }

}
