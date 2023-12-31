import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'components/styled';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const HeaderWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  row-gap: 16px;

  min-height: 48px;
  padding-top: 14px;
  padding-bottom: 14px;

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    justify-content: flex-start;
    column-gap: 30px;

    nav {
      margin-right: auto;
    }
  }
`;

export const HeaderLogo = styled(Logo)`
  width: 48px;
  height: 48px;

  fill: ${(props) =>props.theme.colorPrimary};

  &:hover {
    fill: ${(props) =>props.theme.colorPrimary_50};
  }

  &:active {
    fill: ${(props) =>props.theme.colorPrimary_75};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledHr = styled.hr`
  width: 100%;
  height: 0;
  margin-top: 10px;
  margin-right: 0;
  margin-bottom: 40px;
  margin-left: 0;
	padding: 0;

	border: none;
	box-shadow: 0 0 8px 1px ${(props) =>props.theme.colorBlack_75};
`;
