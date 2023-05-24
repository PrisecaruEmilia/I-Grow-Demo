import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList',
  pure: true,
})
export class SortListPipe implements PipeTransform {
  transform(arr: any[], prop: string): any[] {
    console.log('I run');
    arr.sort((a: any, b: any) => {
      if (a[prop] < b[prop]) {
        return -1;
      } else if (a[prop] > b[prop]) {
        return 1;
      } else {
        return 0;
      }
    });

    return arr;
  }
}
