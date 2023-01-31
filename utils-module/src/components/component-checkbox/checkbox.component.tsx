import React, { ChangeEvent, useState } from 'react';
import { ICheckboxProps } from './checkbox.type';

import './checkbox.style.scss';

export const prefixClassCheckbox = 'checkbox-wrap';

export const Checkbox: React.FC<ICheckboxProps> = (props) => {
	const { onChange, value = false, theme = 'light', label } = props;
	const [checkedValue, setCheckedValue] = useState(value);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.checked;
		onChange?.(newValue);
		setCheckedValue(newValue);
	};

	return (
		<div className={`${prefixClassCheckbox} ${theme}`}>
			<div className={`${prefixClassCheckbox}__entry`}>
				<label className={`${prefixClassCheckbox}__label`}>
					<input
						type="checkbox"
						checked={checkedValue}
						onChange={handleChange}
					/>
					<span className={`${prefixClassCheckbox}__icon`} />
					{label && (
						<div className={`${prefixClassCheckbox}__label-text`}>{label}</div>
					)}
				</label>
			</div>
		</div>
	);
};
