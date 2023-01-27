import React from 'react';
import { IButtonProps } from './button.type';

import './button.style.scss';
import { classNames } from 'src/utils';

export const prefixClassButton = 'button';

export const Button: React.FC<IButtonProps> = (props) => {
	const {
		children,
		onClick,
		disabled,
		color = '',
		fullWidth = true,
		size = 'sm',
	} = props;
	const filterClassNames = classNames({
		fullWidth,
		disabled,
		preDefined: { color, size },
	});
	return (
		<button
			className={`${prefixClassButton} ${filterClassNames}`}
			type="button"
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
