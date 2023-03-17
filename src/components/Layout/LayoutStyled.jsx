import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 0 25px 25px 0;
  text-decoration: none;
  color: ${props => props.theme.colors.active};
  border: 1px solid ${props => props.theme.colors.active};
  transition: all 250ms ease-in-out;
  :nth-child(1) {
     border-radius: 25px 0 0 25px;
  }
  
  &:hover {
    transform: scale(1.05);
		box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.active};
	}
  &.active {
    border: none;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.active};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.active};
   
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  padding: 20px;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
  background-color: ${props => props.theme.colors.buttonBg};
`;

export const Wrapper = styled.div`
  padding: 10px;
`;
