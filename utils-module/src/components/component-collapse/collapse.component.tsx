import React from 'react';
import {
	ICollapseContentProps,
	ICollapseButtonProps,
	TCollapseComponent,
} from './collapse.type';

import './collapse.style.scss';
import { chevronDownIcon } from '../../assets';

export const prefixClassCollapse = 'collapse';

const CollapseButton: React.FC<ICollapseButtonProps> = (props) => {
	const { children } = props;

	const handleToggleCollapse = (e: React.MouseEvent<HTMLDivElement>) => {
		const currentElement = e.currentTarget as HTMLElement;
		currentElement.classList.toggle('active');
		const contentElement = currentElement.nextElementSibling as HTMLElement;
		if (!contentElement.classList.contains(`${prefixClassCollapse}__content`))
			return;

		if (contentElement.style.maxHeight) {
			contentElement.style.maxHeight = '';
		} else {
			contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
		}
	};

	return (
		<div
			className={`${prefixClassCollapse}__button`}
			onClick={handleToggleCollapse}
		>
			{children}
			<div
				className={`${prefixClassCollapse}__button-icon`}
				style={{ maskImage: `url(${chevronDownIcon})` }}
			/>
		</div>
	);
};

const CollapseContent: React.FC<ICollapseContentProps> = (props) => {
	const { children } = props;
	return <div className={`${prefixClassCollapse}__content`}>{children}</div>;
};

export const Collapse: TCollapseComponent = (props) => {
	const { children } = props;

	return <div className={`${prefixClassCollapse}`}>{children}</div>;
};

Collapse.Button = CollapseButton;
Collapse.Content = CollapseContent;
