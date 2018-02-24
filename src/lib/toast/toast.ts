import { Injectable } from '@angular/core';

import './toast.config';

export interface ToastParams {
    msg: string;
    title?: string;
    options?: ToastrOptions;
}

@Injectable()
export class Toast {

    constructor() { }

    error(newVal: ToastParams) {
        toastr.error(newVal.msg, newVal.title, newVal.options);
        return {
            log: function(logData) {
                console.error(`Error: ${newVal.msg}`, logData);
            }
        }
    }

    info(newVal: ToastParams) {
        toastr.info(newVal.msg, newVal.title, newVal.options);
        return {
            log: function(logData) {
                console.info(`Info: ${newVal.msg}`, logData);
            }
        }
    }

    success(newVal: ToastParams) {
        toastr.success(newVal.msg, newVal.title, newVal.options);
        return {
            log: function(logData) {
                console.info(`Success: ${newVal.msg}`, logData);
            }
        }
    }

    warn(newVal: ToastParams) {
        toastr.warning(newVal.msg, newVal.title, newVal.options);
        return {
            log: function(logData) {
                console.warn(`Warning: ${newVal.msg}`, logData);
            }
        }
    }

}
