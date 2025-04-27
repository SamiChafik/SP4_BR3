import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostEditComponent } from './post-edit/post-edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent,},
    { path: 'articles', component: PostListComponent,},
    { path: 'new', component: PostFormComponent, canActivate:[AuthGuard]},
    { path: 'edit/:id', component: PostFormComponent, canActivate:[AuthGuard]},
    { path: 'posts/edit/:id', component: PostEditComponent, canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }   
];
