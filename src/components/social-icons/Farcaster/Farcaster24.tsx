import React, { FC } from 'react';
import { ISocialIconProps } from '../type';

export const IconFarcaster24: FC<ISocialIconProps> = ({
	size = 24,
	color = '#1B1657',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M4.94675 1.66797H19.7811V22.7626H17.6035V13.0999H17.5822C17.3415 10.4294 15.0971 8.33661 12.3639 8.33661C9.6307 8.33661 7.38628 10.4294 7.14562 13.0999H7.12426V22.7626H4.94675V1.66797Z'
			fill={color}
		/>
		<path
			d='M1 4.66205L1.88462 7.65613H2.63314V19.7686C2.25732 19.7686 1.95266 20.0732 1.95266 20.449V21.2656H1.81657C1.44075 21.2656 1.13609 21.5703 1.13609 21.9461V22.7626H8.7574V21.9461C8.7574 21.5703 8.45274 21.2656 8.07692 21.2656H7.94083V20.449C7.94083 20.0732 7.63617 19.7686 7.26035 19.7686H6.44379V4.66205H1Z'
			fill={color}
		/>
		<path
			d='M17.7396 19.7686C17.3638 19.7686 17.0592 20.0732 17.0592 20.449V21.2656H16.9231C16.5473 21.2656 16.2426 21.5703 16.2426 21.9461V22.7626H23.8639V21.9461C23.8639 21.5703 23.5592 21.2656 23.1834 21.2656H23.0473V20.449C23.0473 20.0732 22.7427 19.7686 22.3669 19.7686V7.65613H23.1154L24 4.66205H18.5562V19.7686H17.7396Z'
			fill={color}
		/>
	</svg>
);
