import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vd15-http-client',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './vd15-http-client.component.html',
  styleUrls: ['./vd15-http-client.component.scss']
})
export class Vd15HttpClientComponent implements OnInit {
  // Access crudcrud.com for new free API (expired in 24h)
  apiLink = 'https://crudcrud.com/api/a3d8c736fe7646538caf3426dcff780d/unicorns';
  // Then click button: "Click to create a unicorn" to test this example

  listUser: User[] = [];
  selectedUser = new User();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.get<User[]>(this.apiLink)
      .subscribe({ next: res => this.listUser = res });
  }

  createUser(name: string, age: number) {
    this.http.post(this.apiLink, { name, age })
      .subscribe({ next: () => this.getUser() });
  }

  updateUser(id: string, name: string, age: number) {
    this.http.put(this.apiLink + `/${id}`, { name, age })
      .subscribe({ next: () => this.getUser() });
    this.selectedUser._id = '';
  }

  deleteUser(id: string) {
    this.http.delete(this.apiLink + `/${id}`)
      .subscribe({ next: () => this.getUser() });
  }

  getObserve() {
    this.http.get('https://gist.githubusercontent.com/KangHidro/e476c95a13c55a4e7b9fb4466a8e2720/raw',
      { responseType: 'text' })
      .subscribe({ next: res => alert(res) });
  }
}

export class User {
  constructor(public _id = '', public name = '', public age = 0, public colour = '') { }
}
