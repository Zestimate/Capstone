import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {Flex, Box} from 'grid-styled';

import {Text} from 'components/typography';
import StyledSwitch from './theme-switch';

const Logo = styled('a')`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  border-bottom: 0;
  font-weight: 500;
  font-size: 16px;
`;

const StyledNav = Flex.extend`
  width: 100%;
  padding: 32px 0 24px;
  background-color: ${props => props.theme.colors.background};
  position: null;
  top: 0;
  z-index: 10;
  border-bottom: 0px solid ${props => props.theme.colors.mutedBorder};
`;

const Nav = Box.extend`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 0 8px;
    }
  }

  a {
    color: ${props => props.theme.colors.text};
    border-bottom: 0;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.textHover};
    }
  }
`;

export default ({onThemeChange, selectedTheme}) => (
  <StyledNav is="header" justify="space-between">
    <Logo href="/">University Woes</Logo>
    <Nav is="nav">
      <ul>
        <li>
          <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
            <Link to="/">Home</Link>
          </Text>
        </li>
        <li>
          <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
            <Link to="/profile/">About Me</Link>
          </Text>
        </li>

      </ul>
    </Nav>
  </StyledNav>
);
