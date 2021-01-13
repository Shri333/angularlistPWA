import { Component, Input } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item: string;
  @Input() index: number;

  constructor(private listService: ListService) {}

  changeItem(value: string): void {
    this.item = value;
    this.listService.changeItem(this.index, this.item);
  }

  deleteItem(): void {
    this.listService.deleteItem(this.index);
  }
}
