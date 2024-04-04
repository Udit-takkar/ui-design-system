import React, { FC } from 'react';
import { ISocialIconProps } from './type';

export const IconLens: FC<ISocialIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	const size16 = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 16 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M11.0146 3.60143C11.6705 3.05426 12.4021 2.84608 13.1039 2.89871C13.8524 2.95485 14.545 3.30571 15.0624 3.81534C15.5797 4.32501 15.9351 5.00671 15.992 5.74242C16.0494 6.48483 15.8008 7.26242 15.1454 7.94481C15.0855 8.00769 15.0243 8.06968 14.9617 8.13093C11.9891 11.0592 8.04042 11.0669 8.00002 11.0669H7.99982C7.97963 11.0669 4.01846 11.0668 1.03814 8.13063L1.0375 8.12989C0.975974 8.06894 0.915383 8.00754 0.8557 7.94585L0.855223 7.94525C0.199538 7.26344 -0.0492793 6.48605 0.00794417 5.74364C0.064646 5.00805 0.419804 4.32627 0.936976 3.81643C1.4541 3.30662 2.14671 2.95547 2.89537 2.8991C3.59705 2.84626 4.32888 3.05418 4.98504 3.60108C5.0556 2.75756 5.42319 2.10106 5.95678 1.64972C6.52587 1.16834 7.2675 0.933594 7.99984 0.933594C8.73219 0.933594 9.4738 1.16834 10.0429 1.64972C10.5765 2.10112 10.9441 2.75774 11.0146 3.60143ZM8.13592 10.7701L8.13579 10.7663H8.13603L8.13592 10.7701ZM7.86377 10.7701L7.86366 10.7663H7.8639L7.86377 10.7701ZM10.2332 6.70398C10.1518 6.70398 10.1236 6.81969 10.1755 6.88099C10.2673 6.98955 10.3226 7.12922 10.3226 7.28161C10.3226 7.62739 10.0381 7.9077 9.68715 7.9077C9.33614 7.9077 9.0516 7.62739 9.0516 7.28161C9.0516 7.26312 9.0271 7.25392 9.01603 7.26891C8.9158 7.40453 8.84813 7.55679 8.82032 7.71666C8.80468 7.80666 8.7304 7.88132 8.63707 7.88132H8.58553C8.46372 7.88132 8.36324 7.78397 8.38121 7.66609C8.50445 6.85826 9.31259 6.27236 10.2332 6.27236C11.1537 6.27236 11.9618 6.85826 12.085 7.66609C12.1029 7.78397 12.0025 7.88132 11.8807 7.88132C11.7588 7.88132 11.6624 7.78348 11.6359 7.66714C11.5155 7.13763 10.9569 6.70398 10.2332 6.70398ZM4.58977 7.28161C4.58977 7.25722 4.55767 7.24412 4.54256 7.26353C4.43541 7.40127 4.36241 7.55726 4.3315 7.72166C4.31326 7.81873 4.23308 7.8995 4.13216 7.8995H4.09434C3.97253 7.8995 3.87205 7.80219 3.89 7.68432C4.01318 6.87605 4.82142 6.29059 5.74191 6.29059C6.66239 6.29059 7.47063 6.87605 7.5938 7.68432C7.61178 7.80219 7.51128 7.8995 7.38947 7.8995C7.26768 7.8995 7.17121 7.80175 7.14476 7.68538C7.02434 7.15554 6.46583 6.72221 5.74191 6.72221C5.6761 6.72221 5.65202 6.81323 5.69607 6.86105C5.79842 6.97219 5.86078 7.11973 5.86078 7.28161C5.86078 7.62739 5.57626 7.9077 5.22528 7.9077C4.87429 7.9077 4.58977 7.62739 4.58977 7.28161ZM8.70681 8.79153C8.7929 8.70719 8.92595 8.66621 9.03284 8.72328C9.13973 8.78051 9.18028 8.91313 9.10325 9.00552C8.85236 9.3061 8.44615 9.49669 7.99814 9.49669C7.55036 9.49669 7.14326 9.30818 6.89204 9.00523C6.81528 8.91269 6.85634 8.78006 6.96344 8.72328C7.07054 8.66651 7.20337 8.70808 7.28934 8.79243C7.45493 8.95516 7.70622 9.06513 7.99814 9.06513C8.28929 9.06513 8.54085 8.95396 8.70681 8.79153Z'
				fill={color}
			/>
		</svg>
	);

	switch (size.toString()) {
		case '24':
			return size16;
		default:
			return size16;
	}
};
