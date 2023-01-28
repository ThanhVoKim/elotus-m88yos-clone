export interface IDropdownHeaderProps {
	children: React.ReactNode;
}

export interface IDropdownContentProps {
	children: React.ReactNode;
}

export interface IDropdownProps {
	children: React.ReactNode;
}

export type TDropdownComponent = React.FC<IDropdownProps> & {
	Header: React.FC<IDropdownHeaderProps>;
	Content: React.FC<IDropdownContentProps>;
};
