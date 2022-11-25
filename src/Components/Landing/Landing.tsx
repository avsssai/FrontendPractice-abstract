import React from "react";
import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ArrowRight } from "react-feather";
import data, { IData } from "./data";

const SearchWrapper = styled.div`
	background-color: var(--color-lavendar);
	margin-bottom: 6rem;
`;

const ContentWrapper = styled(MaxWidthWrapper)`
	padding-top: 80px;
	padding-bottom: 120px;
	text-align: center;
`;

const Title = styled.h1`
	font-size: clamp(32px, 2.5vw, 64px);
	font-weight: 300;
	letter-spacing: -1.5px;
	margin-bottom: 40px;
`;

const Arrow = styled.span`
	position: absolute;
	right: 16px;
	top: 16px;
`;
const SearchBoxWrapper = styled.div`
	width: 100%;
	position: relative;
	display: block;
`;

const SearchBox = styled.input`
	display: block;
	width: 100%;
	padding: 1rem;
	border-radius: 5px;
	border: 1px solid var(--color-blue);
	box-shadow: var(--shadow-elevation-medium);
`;

const ItemsWrapper = styled(MaxWidthWrapper)``;

export default function Landing(): JSX.Element {
	return (
		<>
			<SearchWrapper>
				<ContentWrapper>
					<Title>How can we help?</Title>
					<SearchBoxWrapper>
						<SearchBox placeholder='Search' />
						<Arrow>
							<ArrowRight size={24} />
						</Arrow>
					</SearchBoxWrapper>
				</ContentWrapper>
			</SearchWrapper>

			<ItemsWrapper>
				{data.map((item) => (
					<Card title={item.title} description={item.description} image={item.image} />
				))}
			</ItemsWrapper>
		</>
	);
}

const CardWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	margin-bottom: 6rem;
`;
const ImageContainer = styled.div`
	width: 60px;
	flex-shrink: none;
	align-self: start;
`;
const TextContainer = styled.div`
	flex: 1;
`;
const CardTitle = styled.h3`
	font-size: ${22 / 16}rem;
	margin-bottom: 1rem;
`;
const CardDescription = styled.p`
	font-size: ${22 / 16}rem;
`;
const LearnMore = styled.a`
	display: flex;
	align-items: center;
	margin-top: 1rem;
	font-size: ${18 / 16}rem;
	color: var(--color-blue);
`;

function Card(props: IData) {
	const { title, description, image } = props;
	const rootURL = process.env.PUBLIC_URL;
	return (
		<CardWrapper>
			<ImageContainer>
				<img src={`${rootURL}/${image}.png`} alt='decoration' />
			</ImageContainer>
			<TextContainer>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<LearnMore>
					Learn More <ArrowRight size={20} />
				</LearnMore>
			</TextContainer>
		</CardWrapper>
	);
}
