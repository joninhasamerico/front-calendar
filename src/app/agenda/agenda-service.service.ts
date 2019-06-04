import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Agenda} from './Agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService {

  private readonly API = 'http://127.0.0.1:3000/api/agenda/ ';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Agenda[]>(this.API);
  }

}
