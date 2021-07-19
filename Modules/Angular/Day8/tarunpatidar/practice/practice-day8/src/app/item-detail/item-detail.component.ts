import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent{



  @Input() item: Item;
  constructor() { }
  

}
