import { ToastOptions } from "ng2-toastr/src/toast-options";

export class CustomToastOptions extends ToastOptions {
    enableHTML:true;
    positionClass:'toast-top-center';
}