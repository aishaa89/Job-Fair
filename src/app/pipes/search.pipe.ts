import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interface/customer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr:Customer[],searchName:string): Customer[] {
    return arr.filter((p)=>p.name.toLowerCase().includes(searchName.toLowerCase()));
  }

}
