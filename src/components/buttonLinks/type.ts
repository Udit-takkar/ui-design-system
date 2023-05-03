import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export interface IButtonLinkContainerProps {
	linkType?:
		| 'primary'
		| 'secondary'
		| 'texty'
		| 'texty-gray'
		| 'texty-primary'
		| 'texty-secondary';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	isExternal?: boolean;
}

export interface IButtonLinkProps
	extends ComponentPropsWithoutRef<'a'>,
		IButtonLinkContainerProps {
	icon?: ReactNode;
	label: string;
}
