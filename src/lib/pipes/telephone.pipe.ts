import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'telephone'
})
export class TelephonePipe implements PipeTransform {
    transform(tel: any): any {
        if(!tel)
            return tel;

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var city, number;

        switch (value.length) {
            case 10:
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11:
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            default:
                return tel;
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return ("(" + city + ") " + number).trim();
    }
}
