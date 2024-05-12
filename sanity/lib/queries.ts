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
  metadescription: string;
  metatitre: string;
  schema: Image;
  slug: {
    current: string;
    _type: string;
  };
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
  metadescription: string;
  metatitre: string;
  slug: {
    current: string;
    _type: string;
  };
  category: 'projets' | 'recherches';
  titre: string;
  nom: string;
  problematiquesEnjeux: PortableTextBlock[];
  mediationsComptages: PortableTextBlock[];
  prototypesActions: PortableTextBlock[];
  echangesEntretiensDialogues: PortableTextBlock[];
  diffusionRestitution: PortableTextBlock[];
  preconisations: PortableTextBlock[];
  mainImage: Image;
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

export const DESIGNESPACEUNIT_QUERY = groq`*[_type == "designEspace" && slug.current == $slug][0]`;

export type DesignServiceUnitQueryResponse = DesignService | null;

export const DESIGNSERVICEUNIT_QUERY = groq`*[_type == "designService" && slug.current == $slug][0]`;

export type DesignEspaceUnitQueryResponse = DesignEspace | null;
