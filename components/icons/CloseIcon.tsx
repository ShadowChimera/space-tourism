import Image, { ImageProps } from 'next/image';
import closeIcon from '@/public/static/shared/icon-close.svg';

export const CloseIcon = (props: Partial<ImageProps>) => {
  return <Image {...props} src={closeIcon} alt="Close icon" priority />;
};

export default CloseIcon;
