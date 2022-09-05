import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonContainerProps {
	buttonType?:
		| 'primary'
		| 'secondary'
		| 'texty'
		| 'texty-primary'
		| 'texty-secondary';
	disabled?: boolean;
	size?: 'small' | 'medium' | 'large';
}

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	loading?: boolean;
	label: string;
	buttonType?:
		| 'primary'
		| 'secondary'
		| 'texty'
		| 'texty-primary'
		| 'texty-secondary';
	size?: 'small' | 'medium' | 'large';
	icon?: ReactNode;
}
