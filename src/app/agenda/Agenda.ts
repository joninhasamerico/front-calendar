import {Compromisso} from '../compromisso/Compromisso';

export interface Agenda {
  _id: string;
  diaMes: Date;
  compromisso: Compromisso[];
}
