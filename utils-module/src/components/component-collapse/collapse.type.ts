export interface ICollapseButtonProps {
	children: React.ReactNode;
}

export interface ICollapseContentProps {
	children: React.ReactNode;
}

export interface ICollapseProps {
	children: React.ReactNode;
}

export type TCollapseComponent = React.FC<ICollapseProps> & {
	Button: React.FC<ICollapseButtonProps>;
	Content: React.FC<ICollapseContentProps>;
};
