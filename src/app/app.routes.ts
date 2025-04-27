import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostEditComponent } from './post-edit/post-edit.component';

export const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'new', component: PostFormComponent },
    { path: 'edit/:id', component: PostFormComponent },
    { path: 'posts/edit/:id', component: PostEditComponent }
];
