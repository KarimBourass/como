import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {
  opened: boolean = true;
  profile: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.opened = !this.opened;
  }

}
