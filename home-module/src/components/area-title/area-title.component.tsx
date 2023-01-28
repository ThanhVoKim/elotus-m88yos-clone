import React from 'react';
import { IAreaTitleProps } from './area-title.type';
import arrowRightIcon from 'src/assets/icons/icon-arrow-right.svg';

import './area-title.style.scss';

export const prefixClassAriaTitle = 'area-title';

export const AreaTitle: React.FC<IAreaTitleProps> = (props) => {
	const { title, navTitle, navPath = '#' } = props;

	return (
		<div className={`${prefixClassAriaTitle}`}>
			<div className={`${prefixClassAriaTitle}__title`}>{title}</div>
			{navTitle ? (
				<a href={navPath} className={`${prefixClassAriaTitle}__nav`}>
					{navTitle}
					<span
						className={`${prefixClassAriaTitle}__arrow`}
						style={{ maskImage: `url(${arrowRightIcon})` }}
					/>
				</a>
			) : null}
		</div>
	);
};
