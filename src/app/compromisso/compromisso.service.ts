import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Compromisso } from './Compromisso';
import { delay, tap, take } from 'rxjs/operators';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CompromissoService {

  teste: any;
  private readonly API = 'http://127.0.0.1:3000/api/compromisso';

  constructor(private http: HttpClient) {

  }

  async delete(agendaIdd, compromissoId) {

    await axios.delete(`${this.API}`, {
      data: {
        agendaId: agendaIdd,
        id: compromissoId
      }
    });
    return ({ ok: true });
  }

  async loadByID(id) {
    return await axios.get(`http://127.0.0.1:3000/api/compromisso/${id} `).then(result => result)
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

}
