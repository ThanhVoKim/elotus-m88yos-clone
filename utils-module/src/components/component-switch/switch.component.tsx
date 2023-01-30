import React from 'react';
import { ISwitchProps } from './switch.type';

import './switch.style.scss';

export const prefixClassSwitch = 'switch';

export const Switch: React.FC<ISwitchProps> = (props) => {
	const { onChange } = props;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	return (
		<div className={`${prefixClassSwitch}`}>
			<label>
				<input
					className={`${prefixClassSwitch}__input`}
					type="checkbox"
					onChange={handleChange}
				/>
				<div className={`${prefixClassSwitch}__toggle`} />
			</label>
		</div>
	);
};
