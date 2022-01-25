import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconAlertTriangleOutline: FC<IIconProps> = ({
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
				d='M8.00001 6.00001V8.66668M8.00001 11.3333H8.00668M6.86001 2.57335L1.21335 12C1.09693 12.2016 1.03533 12.4302 1.03467 12.663C1.03402 12.8958 1.09434 13.1248 1.20963 13.327C1.32492 13.5293 1.49116 13.6978 1.69182 13.8159C1.89247 13.934 2.12055 13.9975 2.35335 14H13.6467C13.8795 13.9975 14.1076 13.934 14.3082 13.8159C14.5089 13.6978 14.6751 13.5293 14.7904 13.327C14.9057 13.1248 14.966 12.8958 14.9654 12.663C14.9647 12.4302 14.9031 12.2016 14.7867 12L9.14001 2.57335C9.02117 2.37742 8.85383 2.21543 8.65414 2.103C8.45446 1.99058 8.22917 1.93152 8.00001 1.93152C7.77086 1.93152 7.54557 1.99058 7.34588 2.103C7.1462 2.21543 6.97886 2.37742 6.86001 2.57335Z'
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
				d='M12 8.99996V13M12 17H12.01M10.29 3.85996L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7238C2.83871 20.9009 3.18082 20.9961 3.53002 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.85996C13.5318 3.56607 13.2807 3.32308 12.9812 3.15444C12.6817 2.98581 12.3438 2.89722 12 2.89722C11.6563 2.89722 11.3184 2.98581 11.0188 3.15444C10.7193 3.32308 10.4683 3.56607 10.29 3.85996Z'
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
				d='M16 12V17.3334M16 22.6667H16.0134M13.72 5.1467L2.42669 24C2.19385 24.4033 2.07065 24.8604 2.06935 25.3261C2.06804 25.7917 2.18868 26.2495 2.41926 26.6541C2.64984 27.0586 2.98233 27.3957 3.38364 27.6318C3.78495 27.868 4.24109 27.9949 4.70669 28H27.2934C27.759 27.9949 28.2151 27.868 28.6164 27.6318C29.0177 27.3957 29.3502 27.0586 29.5808 26.6541C29.8114 26.2495 29.932 25.7917 29.9307 25.3261C29.9294 24.8604 29.8062 24.4033 29.5734 24L18.28 5.1467C18.0423 4.75484 17.7077 4.43085 17.3083 4.20601C16.9089 3.98116 16.4583 3.86304 16 3.86304C15.5417 3.86304 15.0911 3.98116 14.6918 4.20601C14.2924 4.43085 13.9577 4.75484 13.72 5.1467Z'
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
