import React from "react";
import styled from "styled-components";
import { Anchor } from "react-feather";

interface ILinks {
	title: string;
	links: string[];
}

const links: ILinks[] = [
	{ title: "Abstract", links: ["Start Trial", "Pricing", "Download"] },
	{ title: "Resources", links: ["Blog", "Help Center", "Release", "Notes", "Status"] },
	{ title: "Community", links: ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"] },
	{ title: "Company", links: ["About Us", "Careers", "Legal"] },
	{ title: "Contact Us", links: ["info@abstract.com"] },
];

const Wrapper = styled.div`
	background-color: var(--color-black);
	color: var(--color-white);
`;

const FooterWrapper = styled.div`
	display: grid;
	padding-top: 3rem;
	padding-left: 16px;
	padding-right: 16px;
	row-gap: 3rem;
	grid-template-columns: repeat(auto-fill, minmax(min(100%, 150px), 1fr));
`;
export default function Footer() {
	return (
		<Wrapper>
			<FooterWrapper>
				{links.map((item) => (
					<Section title={item.title} links={item.links} />
				))}
			</FooterWrapper>

			<CopyRightSection>
				<Logo>
					<Anchor size={36} />
				</Logo>
				<CopyRight>&#169; Copyright 2022</CopyRight>
				<CopyRight>Abstract Studio Design, Inc.</CopyRight>
				<CopyRight>All rights reserved</CopyRight>
			</CopyRightSection>
		</Wrapper>
	);
}

const ItemWrapper = styled.div``;

const Title = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;

const Links = styled.ul`
	list-style: none;
	padding: 0;
`;
const Link = styled.li`
	text-decoration: none;
`;

const CopyRightSection = styled.div`
	margin: 3rem 0;
	padding-left: 16px;
	padding-right: 16px;
	padding-bottom: 3rem;
	display: flex;
	flex-direction: column;
	gap: 2px;
`;
const Logo = styled.div`
	margin-bottom: 1rem;
`;
const CopyRight = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
`;

function Section(props: ILinks) {
	return (
		<ItemWrapper>
			<Title>{props.title}</Title>
			<Links>
				{props.links.map((item) => (
					<Link>{item}</Link>
				))}
			</Links>
		</ItemWrapper>
	);
}
