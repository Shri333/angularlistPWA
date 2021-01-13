import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  item: string;
  items: string[];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.items = this.listService.items;
  }

  addItem(): void {
    this.listService.addItem(this.item);
    this.item = "";
  }
}
