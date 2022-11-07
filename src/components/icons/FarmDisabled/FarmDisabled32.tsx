import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconFarmDisabled32: FC<IIconProps> = ({
	size = 32,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M14.747 23.2449C14.749 21.7372 15.2226 20.2662 16.1043 19.0294C16.986 17.7927 18.2334 16.8495 19.6792 16.3265C21.1249 15.8035 22.6996 15.7258 24.1918 16.1038C25.684 16.4818 27.0222 17.2973 28.0267 18.441C28.0993 18.5272 28.1981 18.5885 28.3087 18.616C28.4194 18.6436 28.5361 18.6359 28.642 18.5942C28.7471 18.5561 28.8378 18.4875 28.9018 18.3975C28.9658 18.3075 29.0001 18.2004 29 18.0908V16.132C29 15.8147 29 15.3004 28.9441 15.0377L27.9484 6.28347C27.9131 5.99902 27.7734 5.73678 27.5553 5.54555C27.3372 5.35432 27.0554 5.24712 26.7625 5.2439H18.3718C18.0918 5.24718 17.82 5.33672 17.5951 5.49978C17.3701 5.66283 17.2035 5.89111 17.1188 6.15215L14.5904 15.0706H6.06546C5.78176 15.0718 5.50617 15.1632 5.28018 15.331C5.05419 15.4988 4.89004 15.7338 4.81245 16.0007L3.79438 20.0167C3.7707 20.1152 3.77485 20.2182 3.80638 20.3146C3.83791 20.4109 3.89564 20.4971 3.97338 20.5639C4.05036 20.6335 4.14689 20.6791 4.25056 20.6947C4.35423 20.7103 4.4603 20.6952 4.55514 20.6514C5.20477 20.3907 5.90028 20.2569 6.60246 20.2575C8.01095 20.2575 9.36208 20.8032 10.3601 21.7753C11.3582 22.7475 11.9218 24.0667 11.9278 25.4444C11.9245 25.5171 11.9368 25.5896 11.9638 25.6574C11.9907 25.7252 12.0318 25.7868 12.0844 25.8383C12.1907 25.9355 12.3304 25.9901 12.4759 25.9915H14.4785C14.5649 25.9933 14.6505 25.9751 14.7283 25.9384C14.8061 25.9018 14.8739 25.8476 14.9263 25.7804C14.9786 25.7132 15.014 25.6348 15.0295 25.5517C15.045 25.4686 15.0402 25.3831 15.0155 25.3021C14.8277 24.6321 14.7373 23.9395 14.747 23.2449ZM24.6368 11.5032C24.6354 11.6125 24.6005 11.7188 24.5367 11.8085C24.4729 11.8983 24.3831 11.9672 24.2788 12.0066L18.025 14.4578C17.9546 14.4692 17.8828 14.4692 17.8124 14.4578C17.7244 14.459 17.6374 14.4394 17.5587 14.4008C17.4801 14.3622 17.4121 14.3056 17.3605 14.2358C17.3089 14.166 17.2753 14.0851 17.2624 14C17.2496 13.9148 17.2579 13.8279 17.2866 13.7465L19.2556 7.72792C19.2909 7.61809 19.3607 7.52194 19.4552 7.45318C19.5496 7.38441 19.6637 7.34653 19.7814 7.34492H24.0775C24.2249 7.34772 24.3656 7.40627 24.4698 7.50827C24.5741 7.61028 24.634 7.74783 24.6368 7.89206V11.5032Z'
			fill={color}
		/>
		<path
			d='M6.62476 21.887C5.90564 21.8892 5.20333 22.0999 4.60663 22.4925C4.00993 22.8851 3.54565 23.4419 3.2725 24.0926C2.99935 24.7433 2.9296 25.4586 3.07207 26.148C3.21453 26.8375 3.56281 27.4701 4.07287 27.966C4.58293 28.4618 5.23186 28.7986 5.9376 28.9337C6.64333 29.0688 7.37418 28.9961 8.03771 28.725C8.70125 28.4538 9.26767 27.9962 9.66535 27.4102C10.063 26.8242 10.2741 26.1359 10.2719 25.4325C10.2719 24.9651 10.1774 24.5022 9.99387 24.0707C9.81031 23.6391 9.54131 23.2472 9.20234 22.9177C8.86338 22.5882 8.46114 22.3275 8.01878 22.1506C7.57641 21.9737 7.10265 21.8842 6.62476 21.887ZM6.62476 26.8113C6.34817 26.8113 6.0778 26.7311 5.84783 26.5808C5.61785 26.4305 5.43861 26.2169 5.33276 25.9669C5.22692 25.717 5.19923 25.442 5.25318 25.1766C5.30714 24.9113 5.44033 24.6675 5.63591 24.4763C5.83149 24.285 6.08067 24.1547 6.35194 24.1019C6.62321 24.0491 6.90439 24.0762 7.15992 24.1797C7.41546 24.2833 7.63387 24.4586 7.78753 24.6835C7.94119 24.9085 8.02321 25.1729 8.02321 25.4435C8.02322 25.8044 7.87742 26.1506 7.61758 26.4068C7.35773 26.6631 7.0049 26.8084 6.63595 26.8113H6.62476Z'
			fill={color}
		/>
		<path
			d='M8.86228 5.18857H9.42166V8.5699C9.09613 8.68415 8.8143 8.89337 8.61422 9.1693C8.41415 9.44523 8.30548 9.77457 8.3029 10.1128V12.8486C8.3029 12.9937 8.36184 13.1328 8.46674 13.2354C8.57164 13.3381 8.71392 13.3957 8.86228 13.3957H12.2186C12.3669 13.3957 12.5092 13.3381 12.6141 13.2354C12.719 13.1328 12.7779 12.9937 12.7779 12.8486V10.1128C12.7786 9.77381 12.6712 9.44301 12.4707 9.16647C12.2702 8.88992 11.9865 8.6814 11.6592 8.5699V4.09428C11.6592 3.80406 11.5413 3.52573 11.3315 3.32051C11.1217 3.11529 10.8371 3 10.5404 3H8.86228C8.56557 3 8.28101 3.11529 8.0712 3.32051C7.86139 3.52573 7.74352 3.80406 7.74352 4.09428C7.74352 4.38451 7.86139 4.66284 8.0712 4.86806C8.28101 5.07328 8.56557 5.18857 8.86228 5.18857Z'
			fill={color}
		/>
		<path
			d='M30 23L26.5 26.5M26.5 26.5L23 30M26.5 26.5L23 23M26.5 26.5L30 30'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M25.0666 20.4315C24.3328 19.5564 23.2314 19 22 19C19.7909 19 18 20.7909 18 23C18 24.3655 18.6842 25.5712 19.7285 26.2929'
			stroke={color}
			strokeWidth='3'
			strokeLinecap='round'
		/>
	</svg>
);
