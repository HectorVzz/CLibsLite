import { Pipe, PipeTransform } from '@angular/core';

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

@Pipe({ name: 'sortArray' })

export class SortArrayPipe implements PipeTransform {

  transform(
    arrayData: [{}],
    fromIndex: number,
    toIndex: number,
    type: undefined | 'normal' | 'reverse' | 'byColumn',
    reverse: boolean,
    columnIndex: number) {

    switch (type) {
      case 'byColumn':
        const keys = Object.keys(arrayData[0]);
        if (!reverse) {
          return arrayData.sort(compareValues(keys[columnIndex])).slice(fromIndex,toIndex);
        } else {
          return arrayData.sort(compareValues(keys[columnIndex])).reverse().slice(fromIndex, toIndex);
        }

      case 'reverse':
        return arrayData.reverse().slice(fromIndex, toIndex);

      default:
        return arrayData.slice(fromIndex, toIndex);
    }
  }
}
