import React from 'react';
import { IAreaTitleProps } from './area-title.type';

import './area-title.style.scss';
import { arrowRightIcon } from '../../assets';

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
