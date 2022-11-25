import React from "react";
import styled from "styled-components";
import { Search, Menu, HelpCircle } from "react-feather";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { QUERIES } from "../../styledsUtils/Breakpoints";
const Wrapper = styled.div`
	background-color: var(--color-black);
	padding: 1rem;
`;

const ContentWrapper = styled(MaxWidthWrapper)`
	display: flex;

	align-items: center;
	justify-content: space-between;
	font-weight: 500;
`;

const Logo = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
`;

const Name = styled.span`
	font-size: 1.2rem;
	color: var(--color-white);
`;

const LeftContent = styled.div`
	display: flex;
	gap: 8px;
`;

const MobileOnly = styled.div`
	display: flex;
	gap: 8px;
	@media ${QUERIES.tabletAndUp} {
		display: none;
	}
`;
const TabletAndAbove = styled.div`
	display: none;
	gap: 1rem;
	@media ${QUERIES.tabletAndUp} {
		display: flex;
	}
`;

const ButtonBase = styled.button`
	padding: 0.2rem 1rem;
	font-size: 1.2rem;
`;

const SubmitButton = styled(ButtonBase)`
	display: none;
	background: inherit;
	color: var(--color-white);
	border: 1px solid white;
	border-radius: 5px;
	font-weight: 400;
	cursor: pointer;
	@media ${QUERIES.tabletAndUp} {
		display: block;
	}
`;
const SignIn = styled(ButtonBase)`
	display: none;
	background: var(--color-blue);
	color: var(--color-white);
	border: 1px solid var(--color-blue);
	border-radius: 5px;
	font-weight: 400;
	cursor: pointer;
	@media ${QUERIES.tabletAndUp} {
		display: block;
	}
	&:hover {
		background-color: white;
		color: var(--color-black);
	}
	transition: all 0.2s ease;
`;

export default function Header(): JSX.Element {
	return (
		<Wrapper>
			<ContentWrapper>
				<Logo>
					<HelpCircle size={36} color='white' />
					<Name>Abstract|Help Center</Name>
				</Logo>
				<LeftContent>
					<MobileOnly>
						<Search size={30} color='white' />
						<Menu size={30} color='white' />
					</MobileOnly>
					<TabletAndAbove>
						<SubmitButton>Submit a request</SubmitButton>
						<SignIn>Sign in</SignIn>
					</TabletAndAbove>
				</LeftContent>
			</ContentWrapper>
		</Wrapper>
	);
}
