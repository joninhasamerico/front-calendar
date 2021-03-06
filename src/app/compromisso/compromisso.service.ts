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

  async buscaCompromissoEspecifico(buscaAgendaById) {
    return await axios.get(`http://127.0.0.1:3000/api/compromisso/${buscaAgendaById} `).then(result => result)
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  async buscaAgenda() {
    return await axios.get(`http://127.0.0.1:3000/api/agenda`).then(result => result)
    .catch(error => { console.error(error); return Promise.reject(error); });
  }

  async create(dados) {
    return axios.post('http://127.0.0.1:3000/api/compromisso', dados)
      .then((response) => {
        return response.data;
      });
  }

  async edit(dados, agendaIdCompromissoId) {
    return axios.put(`http://127.0.0.1:3000/api/compromisso/${agendaIdCompromissoId}` , dados)
      .then((response) => {
        return response.data;
      });
  }

  async buscaCep(dadosCep) {
    console.log(dadosCep);
    return await axios.get(`http://127.0.0.1:3000/api/viacep/${dadosCep}`)
    .then((response) => {
      return response.data;
    });
  }

}
