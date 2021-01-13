import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private _items: string[] = ['Finish Homework', 'Cook Dinner'];

  get items(): string[] {
    return this._items;
  }

  addItem(item: string): void {
    this._items.push(item);
  }

  changeItem(index: number, item: string): void {
    this._items[index] = item;
  }

  deleteItem(index: number): void {
    this._items.splice(index, 1);
  }
}
