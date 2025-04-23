import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'articles', component: PostListComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
