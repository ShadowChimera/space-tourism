import Image, { ImageProps } from 'next/image';
import menuIcon from '@/public/static/shared/icon-hamburger.svg';

export const MenuIcon = (props: Partial<ImageProps>) => {
  return <Image {...props} src={menuIcon} alt="Menu icon" priority />;
};

export default MenuIcon;
