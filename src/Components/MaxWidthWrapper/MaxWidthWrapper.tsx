import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../styledsUtils/Breakpoints";

const MaxWidthWrapper = styled.div`
	position: relative;
	padding-left: 16px;
	padding-right: 16px;
	margin-left: auto;
	margin-right: auto;
	max-width: min(100%, (1400px + 32px * 2));
	@media ${QUERIES.laptopAndUp} {
		padding-left: 32px;
		padding-right: 32px;
	}
`;

export default MaxWidthWrapper;
