import { groq, PortableTextBlock } from 'next-sanity';

export interface DesignEspace {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  date?: string;
  category: 'tertiaire' | 'retail' | 'interieur' | 'architecture';
  titre: string;
  mainImage: Image;
  renovation: string;
  honoraire: string;
  squareMeter: number;
  description: PortableTextBlock[];
  imageGallery: Image[];
}

export interface DesignService {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  date?: string;
  category: 'projets' | 'recherches';
  titre: string;
  nom: string;
  problematiquesEnjeux: string;
  mediationsComptages: string;
  prototypesActions: string;
  echangesEntretiens_dialogues: string;
  diffusionRestitution: string;
  mainImage: Image;
  renovation: string;
  honoraire: string;
  squareMeter: number;
  description: PortableTextBlock[];
  imageGallery: Image[];
}

export interface Image {
  _type: string;
  asset: any;
  alt?: string;
  url: string;
  blurSrc: string;
}

export const DESIGNESPACE_QUERY = groq`*[_type == "designEspace"]`;

export const DESIGNSERVICE_QUERY = groq`*[_type == "designService"]`;

export type DesignEspaceQueryResponse = DesignEspace[] | null;

export type DesignServiceQueryResponse = DesignService[] | null;

export type DesignServiceUnitQueryResponse = DesignService | null;

export type DesignEspaceUnitQueryResponse = DesignEspace | null;
