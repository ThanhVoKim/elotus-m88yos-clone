import { HTMLInputTypeAttribute } from 'react';

export interface ICheckboxProps {
	onChange?: (value: boolean) => void;
	value?: boolean;
	theme?: 'dark' | 'light';
	label?: string;
}
