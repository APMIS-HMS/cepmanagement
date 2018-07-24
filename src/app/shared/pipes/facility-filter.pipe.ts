import { Facility } from '../../models/facility';
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'facilityFilter'
})
@Injectable()
export class FacilityFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
      //searchText = searchText.toString().toUpperCase(); 
      return items.filter(item => item.name.indexOf(searchText) !== -1);
  }  
}
