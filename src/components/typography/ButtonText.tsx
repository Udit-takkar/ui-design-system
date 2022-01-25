import styled from 'styled-components';

export interface IButtonTextProps {
	size?: 'small' | 'medium' | 'large';
}

export const ButtonText = styled.a<IButtonTextProps>`
	/* Link/Tiny */
	font-family: Red Hat Text;
	font-style: normal;
	font-weight: 700;
	${props => {
		switch (props.size) {
			case 'small':
				return 'font-size: 12px;line-height: 114%;';
			case 'medium':
				return 'font-size: 14px;line-height: 130%;';
			case 'large':
				return 'font-size: 16px;line-height: 112%;';
			default:
				return 'font-size: 14px;line-height: 18px;';
		}
	}}
`;
