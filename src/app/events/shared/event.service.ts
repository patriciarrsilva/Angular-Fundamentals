import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IEvent, ISession } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    const url = '/api/events';

    return this.http
      .get<IEvent[]>(url)
      .pipe(
        catchError(
          this.handleError<IEvent[]>('getEvents', [])
        )
      );
  }

  getEvent(id: number): Observable<IEvent> {
    const url = '/api/events/' + id;

    return this.http
      .get<IEvent>(url)
      .pipe(
        catchError(this.handleError<IEvent>('getEvent'))
      );
  }

  saveEvent(event: IEvent) {
    const url = '/api/events';

    const body = event;

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post<IEvent>(url, body, options)
      .pipe(
        catchError(this.handleError<IEvent>('saveEvent'))
      );
  }

  searchSessions(
    searchTerm: string
  ): Observable<ISession[]> {
    const url =
      '/api/sessions/search?search=' + searchTerm;

    return this.http
      .get<ISession[]>(url)
      .pipe(
        catchError(
          this.handleError<ISession[]>('searchSessions')
        )
      );
  }

  private handleError<T>(
    operation = 'operation',
    result?: T
  ) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
