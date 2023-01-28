import React from 'react';
import { ISeoContentProps } from './seo-content.type';

import './seo-content.style.scss';

export const prefixClassSeoContent = 'seo-content';

export const SeoContent: React.FC<ISeoContentProps> = (props) => {
	const { data } = props;
	const { title, content = '' } = data;
	return (
		<div className={`${prefixClassSeoContent}`}>
			<div className="container">
				<div className={`${prefixClassSeoContent}_entry`}>
					<h1 className={`${prefixClassSeoContent}__title`}>{title}</h1>
					<div
						className={`${prefixClassSeoContent}__content`}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
			</div>
		</div>
	);
};
