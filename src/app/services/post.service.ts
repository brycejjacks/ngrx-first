import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiService: ApiService) { }

  getAllPosts() {
    return this.apiService.get<Post[]>('posts');
  }
}
