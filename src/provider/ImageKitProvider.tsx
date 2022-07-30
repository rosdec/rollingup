import { ImageKitContextState } from '@/types/ImageKitContextState';
import {
  ImageKitOptions,
  UploadOptions,
  UrlOptions,
} from 'imagekit-javascript/dist/src/interfaces';
import { ImageKitProviderProps } from './ImageKitProviderProps';
import { createContext, useCallback, useEffect, useState } from 'react';
import ImageKit from 'imagekit-javascript';

export const ImageKitContext = createContext<ImageKitContextState | undefined>(
  undefined
);

/**
 * Provides ImageKit configuration data to child components
 * @param param0 ImageKitProviderProps
 * @returns IKContextProvider
 */
export const ImageKitProvider = ({
  children,
  urlEndpoint,
  publicKey,
  authenticationEndpoint,
}: ImageKitProviderProps) => {
  const [imageKitClient, setImageKitClient] = useState<ImageKit>(
    new ImageKit({
      publicKey,
      urlEndpoint,
      authenticationEndpoint,
    })
  );

  useEffect(() => {
    setImageKitClient(
      new ImageKit({
        publicKey,
        urlEndpoint,
        authenticationEndpoint,
      })
    );
  }, [publicKey, authenticationEndpoint, urlEndpoint]);

  const upload = useCallback(
    async (uploadOptions: UploadOptions, options?: Partial<ImageKitOptions>) =>
      await imageKitClient.upload(uploadOptions, options),
    [imageKitClient]
  );

  const url = useCallback(
    async (urlOptions: UrlOptions) => imageKitClient.url(urlOptions),
    [imageKitClient]
  );

  const contextValue: ImageKitContextState = {
    imageKitClient,
    urlEndpoint,
    publicKey,
    authenticationEndpoint,
    upload,
    url,
  };

  return (
    <ImageKitContext.Provider value={contextValue}>
      {children}
    </ImageKitContext.Provider>
  );
};
