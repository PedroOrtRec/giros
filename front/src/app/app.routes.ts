import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SalaComponent } from './pages/sala/sala.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sala', component: SalaComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];