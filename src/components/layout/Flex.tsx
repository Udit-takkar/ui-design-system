import { type CSSProperties } from 'react';
import styled from 'styled-components';

interface IFlexProps {
	$flexWrap?: boolean;
	$alignItems?: CSSProperties['alignItems'];
	$justifyContent?: CSSProperties['justifyContent'];
	$flexDirection?: CSSProperties['flexDirection'];
	gap?: string;
}

export const Flex = styled.div<IFlexProps>`
	display: flex;
	flex-direction: ${props =>
		props.$flexDirection ? props.$flexDirection : 'initial'};
	flex-wrap: ${props => (props.$flexWrap ? 'wrap' : 'nowrap')};
	align-items: ${props =>
		props.$alignItems ? props.$alignItems : 'initial'};
	justify-content: ${props =>
		props.$justifyContent ? props.$justifyContent : 'initial'};
	gap: ${props => props.gap};
`;

interface IFlexCenter {
	gap?: string;
	direction?: CSSProperties['flexDirection'];
}

export const FlexCenter = styled.div<IFlexCenter>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${props => props.gap};
	flex-direction: ${props => props.direction};
`;

export const FlexSpacer = styled.div`
	flex: 1;
`;
