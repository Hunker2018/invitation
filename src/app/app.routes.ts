import { Routes } from '@angular/router';
import { InvitacionIniComponent } from './invitacion-ini/invitacion-ini.component';

export const routes: Routes = [
    { path: 'invitacion', component: InvitacionIniComponent },
    { path: '', redirectTo: 'invitacion', pathMatch: 'full' }
  ];