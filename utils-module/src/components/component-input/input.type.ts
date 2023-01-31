import { HTMLInputTypeAttribute } from 'react';

export interface IInputProps {
	onChange?: (value: string) => void;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
	value?: string;
	theme?: 'dark' | 'light';
}
