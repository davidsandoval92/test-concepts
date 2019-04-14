import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateSolutionComponent } from './date-solution/date-solution.component';

export const routes: Routes = [
  { path: '', redirectTo: '/date-solutions', pathMatch: 'full' },
  { path: 'date-solutions', component: DateSolutionComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTING = RouterModule.forRoot(routes);
