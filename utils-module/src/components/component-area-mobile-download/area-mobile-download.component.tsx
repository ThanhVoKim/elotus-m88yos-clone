import React from 'react';

import mobileDownloadImage from 'src/assets/app-download/mobile-download_EN.png';
import androidIcon from 'src/assets/app-download/mobile-android.svg';
import appleIcon from 'src/assets/app-download/mobile-apple.svg';
import { Button } from '../index';

import './area-mobile-download.style.scss';

export const prefixClassMobileDownload = 'area-mobile-download';

export const AreaMobileDownload: React.FC = () => {
	return (
		<div className={`${prefixClassMobileDownload}`}>
			<div className="container">
				<div className={`${prefixClassMobileDownload}__entry`}>
					<div className={`${prefixClassMobileDownload}__image`}>
						<img src={mobileDownloadImage} alt="download image" />
					</div>
					<div className={`${prefixClassMobileDownload}__describe`}>
						<p>M88 App! Cược mọi lúc, mọi nơi</p>
						<p className="text-secondary-3">Tải ứng dụng miễn phí ngay </p>
					</div>
					<div className={`${prefixClassMobileDownload}__action`}>
						<img src={androidIcon} alt="android" className="device-icon" />
						<img src={appleIcon} alt="apple" className="device-icon" />
						<div className={`${prefixClassMobileDownload}__button`}>
							<Button color="primary" size="lg">
								Tải ngay
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AreaMobileDownload;
