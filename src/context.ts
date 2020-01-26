import { Photon } from '@prisma/photon';
import { ContextParameters } from 'graphql-yoga/dist/types';

const photon = new Photon();

export interface Context {
  photon: Photon;
  request: any; // eslint-disable-line
}

export function createContext(request: ContextParameters): Context {
  return {
    ...request,
    photon,
  };
}
