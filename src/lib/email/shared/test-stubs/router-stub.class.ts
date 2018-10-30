import { EventEmitter } from "@angular/core";

export class RouterStub {

    public events = new EventEmitter();
    public url: string = '/client/list';

    createUrlTree  = class CreateUrlTree {
        constructor(...any){

        }
    };
    serializeUrl  = class CreateUrlTree {
        constructor(urlTree: any){

        }
    };

    navigateByUrl() {
        return null;
    }

    navigate() {
        return new Promise((pass, fail) => { pass(true); });
    }
}
