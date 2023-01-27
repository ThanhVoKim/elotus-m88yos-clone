import React from 'react';
import { IStepGuideProps } from './step-guide.type';
import IconDeposit from 'src/assets/step-guide/icon-three-step-guide-deposit.svg';
import IconJoin from 'src/assets/step-guide/icon-three-step-guide-join.svg';
import IconPlay from 'src/assets/step-guide/icon-three-step-guide-play.svg';
import IconArrow from 'src/assets/icons/icon-arrow-right.svg';

import './step-guide.style.scss';

export const prefixClassStepGuide = 'step-guide';

export const StepGuide: React.FC<IStepGuideProps> = () => {
	return (
		<div className={`${prefixClassStepGuide}`}>
			<div className="container">
				<div className={`${prefixClassStepGuide}__entry`}>
					<div className={`${prefixClassStepGuide}__item`}>
						<div className={`${prefixClassStepGuide}__icon`}>
							<img src={IconJoin} alt="icon" />
						</div>
						<div className={`${prefixClassStepGuide}__content`}>
							<div className={`${prefixClassStepGuide}__title`}>
								ĐĂNG KÝ M88
							</div>
							<div className={`${prefixClassStepGuide}__detail`}>
								Nhanh chóng và dễ dàng!
							</div>
						</div>
					</div>
					<div
						style={{ maskImage: `url(${IconArrow})` }}
						className={`${prefixClassStepGuide}__arrow`}
					/>
					<div className={`${prefixClassStepGuide}__item`}>
						<div className={`${prefixClassStepGuide}__icon`}>
							<img src={IconDeposit} alt="icon" />
						</div>
						<div className={`${prefixClassStepGuide}__content`}>
							<div className={`${prefixClassStepGuide}__title`}>GỬI TIỀN</div>
							<div className={`${prefixClassStepGuide}__detail`}>
								An toàn và thời gian gửi tiền nhanh nhất
							</div>
						</div>
					</div>
					<div
						style={{ maskImage: `url(${IconArrow})` }}
						className={`${prefixClassStepGuide}__arrow`}
					/>
					<div className={`${prefixClassStepGuide}__item`}>
						<div className={`${prefixClassStepGuide}__icon`}>
							<img src={IconPlay} alt="icon" />
						</div>
						<div className={`${prefixClassStepGuide}__content`}>
							<div className={`${prefixClassStepGuide}__title`}>THAM GIA</div>
							<div className={`${prefixClassStepGuide}__detail`}>
								Bắt đầu hành trình chiến thắng của bạn ngay!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
