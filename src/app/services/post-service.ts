import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable({ providedIn: 'root' })

export class PostService {
  getPost(id: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}


  getAll(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createPost(post: any) {
    return this.http.post(this.apiUrl, post);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updatePost(id: number, updatedPost: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedPost);
  }
}
