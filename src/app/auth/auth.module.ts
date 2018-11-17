import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthBlocksModule } from 'AuthBlocks';
import { SharedModule } from '../shared/shared.module';
import { AccessComponent } from './access/access.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, SharedModule, AuthBlocksModule],
  declarations: [AccessComponent]
})
export class AuthModule {}
