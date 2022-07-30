import {
  ImageKitOptions,
  UploadOptions,
  UploadResponse,
  UrlOptions,
} from 'imagekit-javascript/dist/src/interfaces';
import IKResponse from 'imagekit-javascript/dist/src/interfaces/IKResponse';
import ImageKit from 'imagekit-javascript';

export interface ImageKitContextState {
  /** The ImageKit url associated with this context */
  urlEndpoint: string;
  /** The ImageKit public key associated with this context */
  publicKey?: string;
  /** Authentication endpoint (used for client-side uploads) */
  authenticationEndpoint?: string;
  /** Raw ImageKit client */
  imageKitClient?: ImageKit;
  /**
   * You can upload files to ImageKit.io media library from your server-side using private API key authentication.
   *
   * File size limit
   * The maximum upload file size is limited to 25MB.
   *
   * @see {@link https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload}
   *
   * @param uploadOptions
   */
  upload: (
    uploadOptions: UploadOptions,
    options?: Partial<ImageKitOptions>
  ) => Promise<IKResponse<UploadResponse>>;
  /**
   * You can add multiple origins in the same ImageKit.io account.
   * URL endpoints allow you to configure which origins are accessible through your account and set their preference order as well.
   *
   * @see {@link https://github.com/imagekit-developer/imagekit-nodejs#url-generation}
   * @see {@link https://docs.imagekit.io/integration/url-endpoints}
   *
   * @param urlOptions
   */
  url: (urlOptions: UrlOptions) => Promise<string>;
}
