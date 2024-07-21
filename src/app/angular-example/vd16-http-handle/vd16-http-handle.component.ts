import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-vd16-http-handle',
  standalone: true,
  imports: [],
  templateUrl: './vd16-http-handle.component.html',
  styleUrl: './vd16-http-handle.component.scss'
})
export class Vd16HttpHandleComponent implements OnInit{
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getData() {
    this.http.get('https://weatherapi-com.p.rapidapi.com/ip.json?q=%3CREQUIRED%3E')
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    if (err.status === 401) {
      alert('401 Unauthorized!');
    } else {
      alert(`${err.status}: ${err.statusText}`);
    }
    throw err;
  }

}
