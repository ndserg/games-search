import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Ul, Container } from 'components/styled';

export const StyledNav = styled(Container)``;

export const StyledList = styled(Ul)`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    width: 500px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  width: 35px;
  height: 35px;

  color: ${(props) => props.theme.colorBlack};
  font-weight: 500;
  font-size: 16px;
  line-height: 35px;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  border-radius: ${(props) => props.theme.defaultBorderRadius};

  background-color: ${(props) => props.theme.colorBlack_5};

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    &:hover {
      color: ${(props) =>props.theme.colorWhite};

      background-color: ${(props) =>props.theme.colorPrimary};
    }
  }

  &.active {
    color: ${(props) =>props.theme.colorWhite};

    background-color: ${(props) =>props.theme.colorPrimary_75};
  }

  &:active {
    color: ${(props) =>props.theme.colorWhite_75};

    background-color: ${(props) =>props.theme.colorPrimary_50};
  }
`;

export const StyledSpan = styled.span`
  display: inline-block;
  width: 20px;
  height: 35px;

  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  vertical-align: bottom;
`;

export const NavButton = styled(StyledLink)`
  display: inline-block;
  width: 35px;
  height: 35px;

  color: ${(props) => props.theme.colorBlack};
  font-size: 16px;

  border: none;
  border-radius: ${(props) => props.theme.defaultBorderRadius};

  background-color: ${(props) => props.theme.colorBlack_5};
`;