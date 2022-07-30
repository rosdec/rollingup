# imagekit-react-hook

[![npm](https://img.shields.io/npm/v/imagekit-react-hook?color=orange)](https://www.npmjs.com/package/imagekit-react-hook)

This is a simple hook wrapper around the ImageKit.io javascript library. It allows for easy usage of client-side uploads,
as well as generating signed URLs for private images. This is a very direct, non-opinionated wrapper, so the original
ImageKit.io documentation should be referred to for method usage.

## Usage

To use, simply wrap the components you wish to use the `useImageKit` hook with the included `ImageKitProvider`. You must provide the
`urlEndpoint`, `authenticationEndpoint`, and `publicKey` properties.

This example uses NextJS and loads the settings from environment variables, but any framework based on React should be similar:

```tsx
import { ImageKitProvider } from '@/providers/ImageKitProvider';

const PhotosPage = () => {
  const [origin, setOrigin] = useState<string>();

  useEffect(() => setOrigin(window.location.origin), []);

  return (
    <ImageKitProvider
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
      authenticationEndpoint={`${origin}/api/auth/photo`}
      publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}
    >
      <child-components />
    </ImageKitProvider>
  );
};

export default PhotosPage;
```

Child components can then access the ImageKitContext via the `useImageKit` hook:

```tsx
const { upload, url } = useImageKit();

const onClick = (file: File) =>
  await upload({
    file,
    fileName: [uuidV4(), ext].join('.'),
    extensions: [
      {
        name: 'google-auto-tagging',
        minConfidence: 90,
        maxTags: 2,
      },
    ],
  });
```

## Upload Method

The `upload` method is for client-side image uploads. This _requires_ the `authenticationEndpoint` property also
being set. It is up to you how you implement this endpoint, but ImageKit.io offers [this documentation](https://docs.imagekit.io/api-reference/upload-file-api/client-side-file-upload#signature-generation-for-client-side-file-upload) on how to
set it up.

## Hook Methods & Props

The following methods and properties are exposed via the `useImageKit` hook:

| Method/Prop            | Type   | Description                                                                |
| ---------------------- | ------ | -------------------------------------------------------------------------- |
| upload                 | method | Used for client-side uploading of images (requires authenticationEndpoint) |
| url                    | method | Generate signed ImageKit.io URLs                                           |
| urlEndpoint            | string | The ImageKit.io endpoint that was passed into the ImageKitProvider         |
| publicKey              | string | The ImageKit.io public key that was passed into the ImageKitProvider       |
| authenticationEndpoint | string | The authentication endpoint that was passed into the ImageKitProvider      |
| imageKitClient         | object | Raw ImageKit SDK client                                                    |
