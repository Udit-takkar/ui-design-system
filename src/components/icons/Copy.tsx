import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconCopy: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	const size16 = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M3.33331 9.99992H2.66665C2.31302 9.99992 1.97389 9.85944 1.72384 9.60939C1.47379 9.35935 1.33331 9.02021 1.33331 8.66659V2.66659C1.33331 2.31296 1.47379 1.97382 1.72384 1.72378C1.97389 1.47373 2.31302 1.33325 2.66665 1.33325H8.66665C9.02027 1.33325 9.35941 1.47373 9.60946 1.72378C9.8595 1.97382 9.99998 2.31296 9.99998 2.66659V3.33325M7.33331 5.99992H13.3333C14.0697 5.99992 14.6666 6.59687 14.6666 7.33325V13.3333C14.6666 14.0696 14.0697 14.6666 13.3333 14.6666H7.33331C6.59693 14.6666 5.99998 14.0696 5.99998 13.3333V7.33325C5.99998 6.59687 6.59693 5.99992 7.33331 5.99992Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const size24 = (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	const size32 = (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M6.66666 20H5.33332C4.62608 20 3.9478 19.719 3.4477 19.2189C2.94761 18.7188 2.66666 18.0405 2.66666 17.3333V5.33329C2.66666 4.62605 2.94761 3.94777 3.4477 3.44767C3.9478 2.94758 4.62608 2.66663 5.33332 2.66663H17.3333C18.0406 2.66663 18.7188 2.94758 19.2189 3.44767C19.719 3.94777 20 4.62605 20 5.33329V6.66663M14.6667 12H26.6667C28.1394 12 29.3333 13.1939 29.3333 14.6666V26.6666C29.3333 28.1394 28.1394 29.3333 26.6667 29.3333H14.6667C13.1939 29.3333 12 28.1394 12 26.6666V14.6666C12 13.1939 13.1939 12 14.6667 12Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	switch (size.toString()) {
		case '16':
			return size16;
		case '24':
			return size24;
		case '32':
			return size32;
		default:
			return size16;
	}
};
