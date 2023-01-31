import React, { ChangeEvent, useState } from 'react';
import { IInputProps } from './input.type';

import './input.style.scss';

export const prefixClassInput = 'input-wrap';

export const Input: React.FC<IInputProps> = (props) => {
	const {
		onChange,
		type = 'text',
		value = '',
		placeholder = '',
		theme = 'light',
	} = props;
	const [textValue, setTextValue] = useState(value);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		onChange?.(newValue);
		setTextValue(newValue);
	};

	return (
		<div className={`${prefixClassInput} ${theme}`}>
			<div className={`${prefixClassInput}__box`}>
				<input
					className={`${prefixClassInput}__element`}
					type={type}
					placeholder={placeholder}
					value={textValue}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};
