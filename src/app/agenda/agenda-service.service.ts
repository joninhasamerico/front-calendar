import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Agenda } from './Agenda';
import { delay, tap, take } from 'rxjs/operators';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService {

  private readonly API = 'http://127.0.0.1:3000/api/agenda';
  private readonly APICompromisso = 'http://127.0.0.1:3000/api/compromisso';

  constructor(private http: HttpClient) { }


  async carregaAgenda() {
    return await axios.get(`http://127.0.0.1:3000/api/agenda`)
  }

  async buscaAgendaById(id) {
    return await axios.get(`http://127.0.0.1:3000/api/agenda/${id}`)
  }

  async delete(agendas) {
    await axios.delete(`${this.API}`, {
      data: {
        agendaId: agendas._id,
      }
    });
  }

  create(dados) {
    return axios.post('http://127.0.0.1:3000/api/agenda', dados)
      .then((response) => {
        return response.data;
      });
  }

  edite(dados) {
    return axios.put('http://127.0.0.1:3000/api/agenda/'+dados._id, dados)
      .then((response) => {
        return response.data;
      });
  }

}
