import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ConsolidacaoServiceService {

  constructor() { }

  async buscaConsolidacao() {
    return await axios.get(`http://127.0.0.1:3000/api/consolidacao/`).then(result => result)
    .catch(error => { console.error(error); return Promise.reject(error); });
  }

}
