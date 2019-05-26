import {ILocation} from "../interfaces/ILocation";

export function parseLocation(location: ILocation): Array<number> {
     return [parseFloat(location.latitude), parseFloat(location.longitude)];
};

export function sortBy(array: Array<any>, by: string, ascending: boolean = true): Array<any> {
     if(ascending) {
          array.sort(function(a, b){
               if(a[by] < b[by]) { return -1; }
               if(a[by]> b[by]) { return 1; }
               return 0;
          });
     } else {
          array.sort(function(a, b){
               if(a[by] < b[by]) { return 1; }
               if(a[by]> b[by]) { return -1; }
               return 0;
          });
     }

     return array
};

export function filterBy(arr: Array<any>, by:string, param: string): Array<any> {
     return arr.filter(item => item[by].toLowerCase().indexOf(param) > -1)
};
