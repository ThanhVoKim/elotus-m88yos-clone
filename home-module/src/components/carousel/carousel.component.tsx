import React from 'react';
import { Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import leftIcon from 'src/assets/icons/icon-arrow-left.svg';
import rightIcon from 'src/assets/icons/icon-arrow-right.svg';

import { ICarouselItemProps, TCarouselComponent } from './carousel.type';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import './carousel.style.scss';

export const prefixClassCarousel = 'carousel';

export const Carousel: TCarouselComponent = (props) => {
	const { children, swiperOptions, carouselId } = props;
	const { slidesPerView = 'auto' } = swiperOptions || {};
	return (
		<div className={`${prefixClassCarousel}`}>
			<Swiper
				navigation={{
					enabled: true,
					nextEl: `#${carouselId}__nav-next`,
					prevEl: `#${carouselId}__nav-prev`,
				}}
				slidesPerView={slidesPerView}
				spaceBetween={16}
				modules={[Navigation]}
				className={`${prefixClassCarousel}__container`}
			>
				{children}
			</Swiper>
			<div
				id={`${carouselId}__nav-next`}
				className={`${prefixClassCarousel}__nav next`}
			>
				<span
					className={`${prefixClassCarousel}__nav-icon`}
					style={{ maskImage: `url(${rightIcon})` }}
				/>
			</div>
			<div
				id={`${carouselId}__nav-prev`}
				className={`${prefixClassCarousel}__nav prev`}
			>
				<span
					className={`${prefixClassCarousel}__nav-icon`}
					style={{ maskImage: `url(${leftIcon})` }}
				/>
			</div>
		</div>
	);
};

const CarouselItem: React.FC<ICarouselItemProps> = (props) => {
	const { children } = props;
	return <SwiperSlide>{children}</SwiperSlide>;
};
CarouselItem.displayName = 'SwiperSlide';

Carousel.Item = CarouselItem;
