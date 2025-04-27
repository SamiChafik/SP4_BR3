import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post-service';


@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss'
})
export class PostEditComponent {
  post: any = { title: '', content: '' };

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost() {
    const id = this.route.snapshot.params['id'];
    this.postService.getAll(id).subscribe({
      next: (post: any) => this.post = post,
      error: (err: { message: string; }) => alert('Erreur de chargement: ' + err.message)
    });
  }
  save() {
      this.postService.updatePost(this.post.id, this.post).subscribe({
        next: () => {
          alert('Modification sauvegardée !');
          this.router.navigate(['/posts']);
        },
        error: (err) => alert('Erreur: ' + err.message)
      });
    }
  

  cancel() {
    this.router.navigate(['/posts']);
  }


}



