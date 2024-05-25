import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  // Add other routes here
];

export const AppRouting = RouterModule.forRoot(routes);
