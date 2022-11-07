import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconBulbOff32: FC<IIconProps> = ({
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
			d='M18.5625 25.8214V26.8214C19.1148 26.8214 19.5625 26.3737 19.5625 25.8214H18.5625ZM21.3385 20.4922L20.6482 19.7688L20.648 19.7689L21.3385 20.4922ZM16 7.06253L15.9972 8.06253H16V7.06253ZM8.31253 14.7366H9.31253L9.31253 14.7338L8.31253 14.7366ZM10.6615 20.4922L11.3473 19.7644L11.3473 19.7644L10.6615 20.4922ZM13.4375 25.8214H12.4375C12.4375 26.3737 12.8852 26.8214 13.4375 26.8214V25.8214ZM14.2917 29.9375C13.7394 29.9375 13.2917 30.3852 13.2917 30.9375C13.2917 31.4898 13.7394 31.9375 14.2917 31.9375V29.9375ZM17.7083 31.9375C18.2606 31.9375 18.7083 31.4898 18.7083 30.9375C18.7083 30.3852 18.2606 29.9375 17.7083 29.9375V31.9375ZM13.4375 27.3795C12.8852 27.3795 12.4375 27.8272 12.4375 28.3795C12.4375 28.9318 12.8852 29.3795 13.4375 29.3795V27.3795ZM18.5625 29.3795C19.1148 29.3795 19.5625 28.9318 19.5625 28.3795C19.5625 27.8272 19.1148 27.3795 18.5625 27.3795V29.3795ZM15 25.8214C15 26.3737 15.4477 26.8214 16 26.8214C16.5523 26.8214 17 26.3737 17 25.8214H15ZM18.6115 18.9162C19.0485 18.5785 19.129 17.9504 18.7912 17.5135C18.4535 17.0765 17.8254 16.996 17.3885 17.3338L18.6115 18.9162ZM14.6115 17.3338C14.1746 16.996 13.5465 17.0765 13.2088 17.5135C12.871 17.9504 12.9515 18.5785 13.3885 18.9162L14.6115 17.3338ZM19.5625 25.8214V24.5424H17.5625V25.8214H19.5625ZM19.5625 24.5424C19.5625 24.1207 19.8026 23.5952 20.3183 22.9579C20.8239 22.333 21.4522 21.7663 22.0291 21.2155L20.648 19.7689C20.1326 20.261 19.3729 20.9467 18.7635 21.6999C18.1643 22.4405 17.5625 23.4187 17.5625 24.5424H19.5625ZM22.0289 21.2156C23.7833 19.5415 24.6875 17.2979 24.6875 14.7366H22.6875C22.6875 16.8 21.9731 18.5044 20.6482 19.7688L22.0289 21.2156ZM24.6875 14.7366C24.6875 9.92054 20.8371 6.06253 16 6.06253V8.06253C19.7334 8.06253 22.6875 11.0259 22.6875 14.7366H24.6875ZM16.0028 6.06253C14.8609 6.05935 13.7296 6.28152 12.674 6.71631L13.4356 8.5656C14.2479 8.23106 15.1185 8.06008 15.9972 8.06253L16.0028 6.06253ZM12.674 6.71631C11.6183 7.1511 10.659 7.78995 9.85137 8.59623L11.2643 10.0117C11.8855 9.39161 12.6234 8.90014 13.4356 8.5656L12.674 6.71631ZM9.85137 8.59623C9.04368 9.4025 8.40352 10.3603 7.96779 11.4146L9.81614 12.1785C10.1511 11.3681 10.6432 10.6317 11.2643 10.0117L9.85137 8.59623ZM7.96779 11.4146C7.53205 12.4689 7.30935 13.5988 7.31253 14.7394L9.31253 14.7338C9.31008 13.8573 9.48121 12.9889 9.81614 12.1785L7.96779 11.4146ZM7.31253 14.7366C7.31253 17.2094 8.24774 19.5917 9.97568 21.22L11.3473 19.7644C10.0654 18.5564 9.31253 16.7234 9.31253 14.7366H7.31253ZM9.97567 21.22C10.5469 21.7583 11.1753 22.322 11.6797 22.9449C12.1944 23.5805 12.4375 24.1113 12.4375 24.5424H14.4375C14.4375 23.4121 13.8358 22.4296 13.2341 21.6864C12.6221 20.9306 11.8624 20.2499 11.3473 19.7644L9.97567 21.22ZM12.4375 24.5424V25.8214H14.4375V24.5424H12.4375ZM13.4375 26.8214H18.5625V24.8214H13.4375V26.8214ZM14.2917 31.9375H17.7083V29.9375H14.2917V31.9375ZM13.4375 29.3795H18.5625V27.3795H13.4375V29.3795ZM17 25.8214V19H15V25.8214H17ZM18 18.125C17.3885 17.3338 17.3886 17.3337 17.3887 17.3336C17.3888 17.3335 17.3889 17.3334 17.389 17.3334C17.3891 17.3333 17.3893 17.3332 17.3894 17.3331C17.3897 17.3329 17.3898 17.3327 17.39 17.3326C17.3902 17.3325 17.3902 17.3325 17.3899 17.3327C17.3893 17.3331 17.3878 17.3343 17.3852 17.3362C17.3801 17.3401 17.3711 17.3468 17.3586 17.356C17.3335 17.3744 17.2945 17.4024 17.2442 17.4369C17.1428 17.5064 17.0005 17.5986 16.8377 17.6895C16.4679 17.8962 16.1605 18 16 18V20C16.7075 20 17.4 19.6664 17.8132 19.4355C18.0419 19.3077 18.2369 19.1811 18.3749 19.0866C18.4443 19.039 18.5006 18.9987 18.5407 18.9692C18.5609 18.9545 18.577 18.9424 18.5889 18.9334C18.5949 18.9289 18.5998 18.9252 18.6036 18.9223C18.6054 18.9209 18.6071 18.9197 18.6084 18.9186C18.6091 18.9181 18.6097 18.9177 18.6102 18.9173C18.6104 18.9171 18.6107 18.9169 18.6109 18.9167C18.611 18.9166 18.6112 18.9165 18.6112 18.9164C18.6114 18.9163 18.6115 18.9162 18 18.125ZM16 18C15.8396 18 15.5321 17.8962 15.1623 17.6895C14.9995 17.5986 14.8572 17.5064 14.7558 17.4368C14.7055 17.4024 14.6665 17.3744 14.6414 17.356C14.6289 17.3468 14.6199 17.3401 14.6148 17.3362C14.6122 17.3343 14.6107 17.3331 14.6101 17.3327C14.6098 17.3325 14.6098 17.3324 14.61 17.3326C14.6102 17.3327 14.6103 17.3329 14.6106 17.333C14.6107 17.3331 14.6108 17.3333 14.611 17.3334C14.6111 17.3334 14.6112 17.3335 14.6113 17.3336C14.6114 17.3337 14.6115 17.3338 14 18.125C13.3885 18.9162 13.3886 18.9163 13.3888 18.9165C13.3888 18.9165 13.389 18.9166 13.3891 18.9167C13.3893 18.9169 13.3896 18.9171 13.3898 18.9173C13.3904 18.9177 13.3909 18.9181 13.3916 18.9186C13.3929 18.9197 13.3946 18.9209 13.3964 18.9223C13.4002 18.9252 13.4051 18.9289 13.4111 18.9334C13.423 18.9424 13.4391 18.9545 13.4593 18.9692C13.4995 18.9987 13.5557 19.039 13.6251 19.0866C13.7631 19.1811 13.9581 19.3077 14.1868 19.4355C14.6 19.6664 15.2926 20 16 20V18Z'
			fill={color}
		/>
	</svg>
);
