import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconWarning24: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 26 23'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M13 8.00926V12.6034M13 17.1976H13.0115M11.036 2.10575L1.30783 18.3462C1.10726 18.6935 1.00113 19.0873 1.00001 19.4884C0.998886 19.8895 1.10281 20.2839 1.30143 20.6324C1.50005 20.9808 1.78646 21.2712 2.13215 21.4746C2.47784 21.678 2.87077 21.7874 3.27184 21.7918H22.7282C23.1292 21.7874 23.5222 21.678 23.8678 21.4746C24.2135 21.2712 24.4999 20.9808 24.6986 20.6324C24.8972 20.2839 25.0011 19.8895 25 19.4884C24.9989 19.0873 24.8927 18.6935 24.6922 18.3462L14.964 2.10575C14.7593 1.7682 14.471 1.48912 14.1269 1.29544C13.7829 1.10175 13.3948 1 13 1C12.6052 1 12.2171 1.10175 11.8731 1.29544C11.529 1.48912 11.2407 1.7682 11.036 2.10575Z'
			stroke={color}
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
