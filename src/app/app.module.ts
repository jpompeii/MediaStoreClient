import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormModule } from './components/dynamic-form/dynamic-form.module';

const routes: Routes = [
  { path: 'explore', loadChildren: './explorer/explorer.module#ExplorerModule' },
  { path: 'builder', component: DynamicFormComponent },
  { path: '**', redirectTo: 'explore' }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicFormModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
