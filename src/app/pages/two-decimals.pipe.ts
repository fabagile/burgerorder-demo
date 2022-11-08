import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDecimals'
})
export class TwoDecimalsPipe implements PipeTransform {

  transform(value: number ): string {
    return `${value.toFixed(2).replace('.', '€')}`;
    // return `${value.toFixed(2).replace('.', ',')} €`;
  }

}
