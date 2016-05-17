import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(array: any, pattern: string) {
      if(array && pattern && pattern.length) {
        return array.filter(
          (value) => value.name.toLowerCase().match(pattern.toLowerCase())
        );
      }

      return array;
    }
}
