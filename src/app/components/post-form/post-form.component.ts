import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  newPost = {
    title: '',
    content: ''
  };
Router: any;

  constructor(
    private postService: PostService,
    private router: Router
  ) {}

  
  onSubmit() {
    this.postService.createPost(this.newPost).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}