import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { Button } from '../index';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import './banner.style.scss';

import { IBannerProps } from '.';
import { arrowLeftIcon, arrowRightIcon } from '../../assets';
import { toggleRegisterModalAction } from '../../store-global';

export const prefixClassBanner = 'banner';

export const Banner: React.FC<IBannerProps> = (props) => {
	const { bannerId, bannerData } = props;

	const handleRegister = () => {
		toggleRegisterModalAction(true);
	};

	return (
		<div className={`${prefixClassBanner}`}>
			<div className="container">
				<Swiper
					pagination={{
						dynamicBullets: true,
						clickable: true,
						bulletClass: `${prefixClassBanner}__bullet`,
						bulletActiveClass: 'active',
						renderBullet: (index, className) => {
							return `<div class="${className}"></div>`;
						},
					}}
					navigation={{
						enabled: true,
						nextEl: `#${bannerId}__nav-next`,
						prevEl: `#${bannerId}__nav-prev`,
					}}
					loop={true}
					modules={[Pagination, Navigation]}
					className={`${prefixClassBanner}__swiper mySwiper`}
				>
					{bannerData.map((banner, index) => {
						const { background, icon, title, detail, buttonTitle } = banner;
						return (
							<SwiperSlide key={index}>
								<div className={`${prefixClassBanner}__item`}>
									<div className={`${prefixClassBanner}__background`}>
										<img src={background} alt="banner poster" />
									</div>
									<div className={`${prefixClassBanner}__content`}>
										<div className={`${prefixClassBanner}__icon`}>
											<img src={icon} alt="banner icon" />
										</div>
										<div className={`${prefixClassBanner}__title`}>{title}</div>
										<div className={`${prefixClassBanner}__detail`}>
											{detail}
										</div>
										<div className={`${prefixClassBanner}__action`}>
											<Button
												onClick={handleRegister}
												color="primary"
												size="lg"
											>
												{buttonTitle}
											</Button>
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
					<div className={`${prefixClassBanner}__nav-container`}>
						<div
							id={`${bannerId}__nav-prev`}
							className={`${prefixClassBanner}__nav prev`}
						>
							<span
								className={`${prefixClassBanner}__nav-icon`}
								style={{ maskImage: `url(${arrowLeftIcon})` }}
							/>
						</div>
						<div
							id={`${bannerId}__nav-next`}
							className={`${prefixClassBanner}__nav next`}
						>
							<span
								className={`${prefixClassBanner}__nav-icon`}
								style={{ maskImage: `url(${arrowRightIcon})` }}
							/>
						</div>
					</div>
				</Swiper>
			</div>
		</div>
	);
};
