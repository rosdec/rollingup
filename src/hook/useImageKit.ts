import { ImageKitContext } from '@/provider/ImageKitProvider';
import { useContext } from 'react';

/**
 * ImageKit Hook
 * @returns Methods and properties for interacting with ImageKit.io
 */
export const useImageKit = () => {
  const imageKit = useContext(ImageKitContext);
  if (!imageKit)
    throw new Error('useImageKit must be used within ImageKitProvider');
  return imageKit;
};
