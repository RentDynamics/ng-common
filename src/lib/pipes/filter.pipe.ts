import { Pipe, PipeTransform } from '@angular/core';

import { isBoolean, isFunction } from '@rd/core';

@Pipe({
    name: 'filter',
    pure: true
})
export class FilterPipe implements PipeTransform {

    transform(value: any[], expression: any): any {
        return (function init() {
            let result = [];

            if (!value)
                return result;

            if (isFunction(expression))
                return value.filter(item => expression(item));
        })();
    }

    // expression(item){
    //     let keys: string[] = Object.keys(item)
    //     return keys.map(k => {
    //         let val = keys[k];
    //         return val;
    //     }).filter(v => v === textInput)
    // }

}
