import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSummeryPipe'
})
export class CustomSummeryPipePipe implements PipeTransform {

  transform(value: string, args?: number) {
   if (!value)
    return null;
    return value.substr(0,5);
  }

}
