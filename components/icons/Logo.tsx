import Image, { ImageProps } from 'next/image';
import logo from '@/public/static/shared/logo.svg';

export const Logo = (props: Partial<ImageProps>) => {
  return <Image {...props} src={logo} alt="Logo" priority />;
};

export default Logo;
