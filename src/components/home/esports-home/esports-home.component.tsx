import React from 'react';
import { IEsportsHomeProps } from './esports-home.type';

import esportsBackground from 'src/assets/esports/bg-esports.jpg';
import layer1Image from 'src/assets/esports/layer-1.png';
import layer2Image from 'src/assets/esports/layer-2.png';
import layer3Image from 'src/assets/esports/layer-3.png';
import layer5Image from 'src/assets/esports/layer-5.png';
import esoccerLogo from 'src/assets/esports/logo-esoccer-vn.svg';
import pinnacleLogo from 'src/assets/esports/logo-pinnacle-esports.svg';
import sabaLogo from 'src/assets/esports/logo-saba-esports.svg';
import tfLogo from 'src/assets/esports/logo-tf-gaming.svg';

import './esports-home.style.scss';
export const prefixClassEsportsHome = 'esports-home';

export const EsportsHome: React.FC<IEsportsHomeProps> = () => {
	return (
		<div className={`${prefixClassEsportsHome}`}>
			<div className="container">
				<div className={`${prefixClassEsportsHome}__entry`}>
					<div
						className={`${prefixClassEsportsHome}__background parallax`}
						style={{ backgroundImage: `url(${esportsBackground})` }}
					>
						<div
							className={`${prefixClassEsportsHome}__layer1 parallax`}
							style={{ backgroundImage: `url(${layer1Image})` }}
						/>
						<div
							className={`${prefixClassEsportsHome}__layer2 parallax`}
							style={{ backgroundImage: `url(${layer2Image})` }}
						/>
						<div
							className={`${prefixClassEsportsHome}__layer3 parallax`}
							style={{ backgroundImage: `url(${layer3Image})` }}
						/>
						<div
							className={`${prefixClassEsportsHome}__layer5 parallax`}
							style={{ backgroundImage: `url(${layer5Image})` }}
						/>
					</div>
					<div className={`${prefixClassEsportsHome}__content`}>
						<div className={`${prefixClassEsportsHome}__title`}>
							<span>
								ĐẶT CƯỢC TẠI CÁC GIẢI ĐẤU THỂ
								<br /> THAO ĐIỆN TỬ TỐT NHẤT
							</span>
						</div>
						<div className={`${prefixClassEsportsHome}__describe`}>
							<span className="text-secondary-3">
								CHỈ CÓ TẠI CÁC NHÀ CUNG
								<br /> CẤP CỦA CHÚNG TÔI
							</span>
						</div>
						<div className={`${prefixClassEsportsHome}__partners`}>
							<div className={`${prefixClassEsportsHome}__partners-item`}>
								<a
									href="#"
									className={`${prefixClassEsportsHome}__partners-link tfgaming`}
								>
									<img src={tfLogo} alt="partners" />
								</a>
							</div>
							<div className={`${prefixClassEsportsHome}__partners-item`}>
								<a
									href="#"
									className={`${prefixClassEsportsHome}__partners-link pinnacle`}
								>
									<img src={pinnacleLogo} alt="partners" />
								</a>
							</div>
							<div className={`${prefixClassEsportsHome}__partners-item`}>
								<a
									href="#"
									className={`${prefixClassEsportsHome}__partners-link saba`}
								>
									<img src={sabaLogo} alt="partners" />
								</a>
							</div>
							<div className={`${prefixClassEsportsHome}__partners-item`}>
								<a
									href="#"
									className={`${prefixClassEsportsHome}__partners-link esoccer`}
								>
									<img src={esoccerLogo} alt="partners" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
