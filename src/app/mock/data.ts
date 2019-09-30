import {Imperador} from "../model/Imperador";
import {Principado} from "../model/Principado";

export const principados: Principado[] = [{
  id: 1,
  descricao: "Dinastia júlio-claudiana (27 a.C.-68 d.C.)"
}];

export const imperadores: Imperador[] = [
  {
    id: 1,
    nome: 'Augusto',
    nomeImperial: 'IMPERATOR CAESAR DIVI FILIVS AVGVSTVS',
    principado: principados.find(val => val.id = 1),
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Augustus_Bevilacqua_Glyptothek_Munich_317.jpg/100px-Augustus_Bevilacqua_Glyptothek_Munich_317.jpg'
  },
  {
    id: 2,
    nome: 'Tibério',
    nomeImperial: 'TIBERIVS CAESAR AVGVSTVS',
    principado: principados.find(val => val.id = 1),
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Tiberius_palermo.jpg/100px-Tiberius_palermo.jpg'
  },
  {
    id: 3,
    nome: 'Calígula',
    nomeImperial: 'GAIVS CAESAR AVGVSTVS GERMANICVS',
    principado: principados.find(val => val.id = 1),
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Gaius_Caesar_Caligula.jpg/100px-Gaius_Caesar_Caligula.jpg'
  },
  {
    id: 4,
    nome: 'Claúdio',
    nomeImperial: 'TIBERIVS CLAVDIVS CAESAR AVGVSTVS GERMANICVS',
    principado: principados.find(val => val.id = 1),
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Claudius_Gabies_Louvre_Ma1231.jpg/100px-Claudius_Gabies_Louvre_Ma1231.jpg'
  },
  {
    id: 5,
    nome: 'Nero',
    nomeImperial: 'NERO CLAVDIVS CAESAR AVGVSTVS GERMANICVS',
    principado: principados.find(val => val.id = 1),
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nero_Glyptothek_Munich_321.jpg/100px-Nero_Glyptothek_Munich_321.jpg'
  },
];
