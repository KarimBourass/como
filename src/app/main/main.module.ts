import { NgModule } from '@angular/core';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { LayoutSideNavComponent } from './layout/layout-side-nav/layout-side-nav.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
  },
];


@NgModule({
  declarations: [
    LayoutContainerComponent,
    LayoutSideNavComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MainModule { }
