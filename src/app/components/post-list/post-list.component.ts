import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post-service';
import id from '@angular/common/locales/id';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getAll(id).subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Erreur:', err)
    });
  }

  deletePost(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet article ?')) {
      this.postService.delete(id).subscribe({
        next: () => this.loadPosts(),
        error: (err) => console.error('Erreur:', err)
      });
    }
  }

  editPost(post: any) {
    const newTitle = prompt('Nouveau titre:', post.title);
    const newContent = prompt('Nouveau contenu:', post.content);
    
    if (newTitle && newContent) {
      this.postService.updatePost(post.id, {
        title: newTitle,
        content: newContent
      }).subscribe(() => {
        alert('Article modifié !');
        this.loadPosts();
      });
    }
  }
}
