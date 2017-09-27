import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      console.log(`Search Term empty '${searchTerm}'`);
      return items;
    }
    else {
      console.log(`Search Term not empty '${searchTerm}'`);
      searchTerm = searchTerm.toLocaleLowerCase();
      return items.filter(function (el: any) {
        return el.creator.toLowerCase().indexOf(searchTerm) > -1 || el.question.toLowerCase().indexOf(searchTerm) > -1;
      })
    }

  }

}
