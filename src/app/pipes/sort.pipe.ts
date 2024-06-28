import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(array: any[], propertyName: string): any[] {
    if (!Array.isArray(array) || array.length <= 1 || !propertyName) {
      return array;
    }

    // Realiza una copia para no modificar el arreglo original
    let sortedArray = [...array];

    sortedArray.sort((a, b) => {
      let propA = a[propertyName].toLowerCase();
      let propB = b[propertyName].toLowerCase();
      if (propA < propB) {
        return -1;
      }
      if (propA > propB) {
        return 1;
      }
      return 0;
    });

    return sortedArray;
  }

}
