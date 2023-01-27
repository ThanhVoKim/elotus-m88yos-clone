export type TColorButton = 'primary' | 'secondary';
export type TSizeButton = 'sm' | 'md' | 'lg';

export interface IButtonProps {
	color?: TColorButton;
	onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
	children: React.ReactNode;
	disabled?: boolean;
	fullWidth?: boolean;
	size?: TSizeButton;
}
