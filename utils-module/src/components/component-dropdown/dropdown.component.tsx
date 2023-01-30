import React from 'react';
import {
	IDropdownContentProps,
	IDropdownHeaderProps,
	TDropdownComponent,
} from './dropdown.type';

import './dropdown.style.scss';
import { chevronDownIcon } from '../../assets';

export const prefixClassDropdown = 'dropdown';

const DropdownHeader: React.FC<IDropdownHeaderProps> = (props) => {
	const { children } = props;
	return (
		<div className={`${prefixClassDropdown}__header`}>
			<div className={`${prefixClassDropdown}__header-button`}>{children}</div>
			<div
				className={`${prefixClassDropdown}__header-icon`}
				style={{ maskImage: `url(${chevronDownIcon})` }}
			/>
		</div>
	);
};

const DropdownContent: React.FC<IDropdownContentProps> = (props) => {
	const { children } = props;
	return (
		<div className={`${prefixClassDropdown}__content`}>
			<div className={`${prefixClassDropdown}__content-wrap`}>{children}</div>
		</div>
	);
};

export const Dropdown: TDropdownComponent = (props) => {
	const { children } = props;

	return <div className={`${prefixClassDropdown}`}>{children}</div>;
};

Dropdown.Header = DropdownHeader;
Dropdown.Content = DropdownContent;
