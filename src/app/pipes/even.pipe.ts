import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even',
  pure: false // Reactive
})
export class EvenPipe implements PipeTransform {
  // transform peut prendre plusieurs params
  transform(array: Array<number>) {
    return (array.filter(n => n % 2 === 0));
  }

}
