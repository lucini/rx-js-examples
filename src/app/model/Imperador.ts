import {Principado} from "./Principado";


export interface Imperador {
  id: number;
  nome: string;
  nomeImperial: string;
  image?: string;
  principado?: Principado;
}
