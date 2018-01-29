import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ExplorerAppComponent } from './explorer-app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';

const routes: Routes = [
  { path: '', component: ExplorerAppComponent,
    children: [
      { path: '', component: AssetListComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExplorerAppComponent, SidenavComponent, AssetListComponent]
})
export class ExplorerModule { }
