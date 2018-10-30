import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoredProcedureService } from './stored-procedure.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    StoredProcedureService
  ]
})
export class StoredProcedureModule { }
