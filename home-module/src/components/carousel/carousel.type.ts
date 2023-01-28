import { SwiperOptions } from 'swiper';

export interface ICarouselItemProps {
	children: React.ReactNode;
}

export interface ICarouselProps {
	children: React.ReactNode;
	swiperOptions?: SwiperOptions;
	carouselId: string;
}

export type TCarouselComponent = React.FC<ICarouselProps> & {
	Item: React.FC<ICarouselItemProps>;
};
