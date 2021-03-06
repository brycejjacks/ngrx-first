import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private apiService: ApiService) { }

  getAllUsers() {
    return this.apiService.get<User[]>('users');
  }
}
