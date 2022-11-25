import React from "react";
import styled from "styled-components";
import { Search, Menu, HelpCircle } from "react-feather";
const Wrapper = styled.div`
	display: flex;
	background-color: var(--color-black);
	padding: 2rem 1rem;
	align-items: center;
	justify-content: space-between;
	font-weight: 500;
`;

const Logo = styled.div`
	display: flex;
	gap: 4px;
`;

const Name = styled.span`
	font-size: 1.4rem;
	color: var(--color-white);
`;

const LeftContent = styled.div`
	display: flex;
	gap: 8px;
`;

export default function Header(): JSX.Element {
	return (
		<Wrapper>
			<Logo>
				<HelpCircle size={36} color='white' />
				<Name>Abstract|Help Center</Name>
			</Logo>
			<LeftContent>
				<Search size={30} color='white' />
				<Menu size={30} color='white' />
			</LeftContent>
		</Wrapper>
	);
}
