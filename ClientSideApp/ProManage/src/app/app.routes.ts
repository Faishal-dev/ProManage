import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './component/login/login.component';
import { ConfirmOtpComponent } from './component/confirm-otp/confirm-otp.component';
import { RegisterComponent } from './component/register/register.component';


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'confirm-otp',component:ConfirmOtpComponent}
  // Add other routes here
];

export const AppRouting = RouterModule.forRoot(routes);
