import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../models/reponses/user.response';
import { Observable } from 'rxjs';
import { UserRequest } from '../models/requests/user.request';

@Injectable()
export class UserService {

  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.API_URL}/users`);
  }

  createUser(user: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.API_URL}/users`, user);
  }

  updateUser(user: UserRequest, id: number): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.API_URL}/users/${id}`, user);
  }

  getUserById(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.API_URL}/users/${id}`);
  }

  deleteUser(id: number): Observable<UserResponse> {
    return this.http.delete<UserResponse>(`${this.API_URL}/users/${id}`);
  }

  searchUserByName(name: string): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.API_URL}/users?name_like=${name}`);
  }

}
