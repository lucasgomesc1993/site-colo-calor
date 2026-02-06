export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image?: string;
}

import { post as post1 } from "./blog/preparacao-amamentar-gestacao";
import { post as post2 } from "./blog/fissuras-mamarias-causa-tratamento";
import { post as post3 } from "./blog/bebe-horas-no-peito-sinal-dificuldade";
import { post as post4 } from "./blog/dor-ao-amamentar-causas-solucoes";
import { post as post5 } from "./blog/acessorios-amamentacao-ajuda-ou-atrapalha";
import { post as post6 } from "./blog/qual-bomba-de-leite-escolher-guia-cientifico";
import { post as post7 } from "./blog/baixa-producao-de-leite-mitos-verdades";
import { post as post8 } from "./blog/laserterapia-na-amamentacao-ciencia-e-cuidado";
import { post as post9 } from "./blog/desmame-precoce-causas-impacto-emocional";
import { post as post10 } from "./blog/retorno-ao-trabalho-planejamento-amamentacao";

export const blogPosts: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10
];
