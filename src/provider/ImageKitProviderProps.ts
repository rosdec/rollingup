import { PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export interface ImageKitProviderProps extends PropsWithChildren<{}> {
  urlEndpoint: string;
  publicKey?: string;
  authenticationEndpoint?: string;
}
