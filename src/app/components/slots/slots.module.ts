import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {SlotsRoutingModule} from "./slots-routing.module";
import {SlotsComponent} from "./slots.component";



@NgModule({
  declarations: [
    SlotsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SlotsRoutingModule
  ]
})
export class SlotsModule { }
