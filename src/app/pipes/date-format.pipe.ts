import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | number): string {
    if (value == null) return '';

    const str = value.toString().trim(); 

    if (str.length !== 8) return str;

    const year = str.slice(0, 4);
    const month = str.slice(4, 6);
    const day = str.slice(6, 8);

    return `${day}/${month}/${year}`;
  }
}
