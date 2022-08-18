import { StyledButton } from "@components/Button/style";
import { CardText } from "@components/CountryCard/style";
import { Wrapper } from "@pages/style";
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const CountryName = styled.h1`
  color: var(--theme-color);
  font-size: 1.25em;
	width: 100%;
	margin: 1em 0;

  @media screen and (min-width: 1200px) {
    margin-top: 5%;
	  font-size: 1.5em;
  }
	
	@media screen and (min-width: 1920px) {
    font-size: 2.25em;
	}
`;

export const CountryInfo = styled(CardText)`
  ${({ hide }) => hide && css`
    display: none;
  `}
  padding-left: 0;
  margin: 8px 0;
	line-height: 1.5;
	
	@media screen and (min-width: 1920px) {
    font-size: 1.35em;
	}
`;

export const CountryInfoWrapper = styled.div`
	margin: 3.5rem 0;
	
	@media screen and (min-width: 1200px) {
		margin: 0;
    white-space: nowrap;

    &:first-of-type {
      margin-right: 5rem;
    }
	}
`;

export const CountryInfoContainer = styled.div`
	width: 100%;
	max-width: 750px;
	
	@media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    max-width: unset;
  }
`;

export const BorderCountries = styled(Wrapper)`
  width: 100%;
  padding: 10px 0;
  position: relative;
  min-height: 62px;

  @media screen and (min-width: 1200px) {
    padding: 10% 0 0 0;
	  margin-bottom: 5%;
    align-self: flex-end;
  }
`;

export const BorderCountriesHeading = styled.h2`
  font-size: 1em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 0 0.35em ;
	width: 100%;
	
	@media screen and (min-width: 1920px) {
    font-size: 1.5em;
	}
`;

export const BorderCountry = styled(StyledButton).attrs({ as: Link })`
  text-decoration: none;
  width: 48%;
  padding: 1em 0.8em;
  margin: 0.5% 1% 0.5% 0;
  word-break: break-all;
  max-width: 200px;
  line-height: 1;
  text-align: center;
  min-width: fit-content;

  @media screen and (min-width: 660px) {
    width: 23%;
    margin: 1% 2% 1% 0;
  }
	
  @media screen and (min-width: 440px) and (min-width: 1200px) {
    width: 31%;
    margin: calc(7% / 6) calc(7% / 3) calc(7% / 6) 0;
  }
	
	@media screen and (min-width: 1920px) {
    font-size: 1.15em;
	}

  &:last-of-type {
    margin-right: 0;
  }

  &:first-of-type {
    margin-left: 0;
  }
`;

export const CountryDetailsWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 1200px) {
    display: inline;
    align-self: center;
    margin-right: auto;
    width: unset;
  }

  @media screen and (min-width: 1920px) {
    font-size: 1.25em;
    margin-left: 2em;
  }
`;

export const CountryDetailsFlag = styled.div`
  width: 100%;
  max-width: 660px;

  & img {
	  border: 1px solid var(--theme-background);
  }
	
	@media screen and (min-width: 1200px) {
    width: 45%;
		margin: 0 auto;
    max-width: unset;

		& > div {
			width: 100%;
			display: flex;
		}
	}

  @media screen and (min-width: 1440px) {
    width: 50%;
	}

  @media screen and (min-width: 1920px) {
    & img {
      max-width: unset;
    }
  }
`;
