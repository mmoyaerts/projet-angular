
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, format: string = 'dd-MM-yyyy'): any
  {
    const datePipe = new DatePipe('en-Us')
    return datePipe.transform(value, format);
  }

}
