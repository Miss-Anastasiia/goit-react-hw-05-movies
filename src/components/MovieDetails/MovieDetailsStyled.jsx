import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  padding: 10px;
  margin-top: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  justify-content: center;
`;

export const FilmInfoContainer = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  max-width: 100%;
  max-height: 50%;
`;
export const FilmMore = styled.section`
  padding: 10px;
  margin: 15px auto;
`;
export const Paragraph = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  color: ${props => props.theme.colors.active};
`;

export const GenresList = styled.ul`
  display: flex;
  font-size: 14px;
  color: ${props => props.theme.colors.active};
`;

export const GenresItem = styled.li`
  font-weight: 600;
  margin-right: 7px;
`;

export const LinkReturn = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 10px 40px;
  color: ${props => props.theme.colors.active};
  font-weight: 500;
  width: 150px;
  background-color: ${props => props.theme.colors.greyBg};
  border-radius: 25px 0 0 25px;
  transition: all 250ms ease-in-out;
  :hover {
    transform: scale(1.05);
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.active};
  }
`;

export const LinkCast = styled(NavLink)`
  height: 45px;
  padding: 10px 30px;
  margin-right: 15px;
  border-radius: 25px 0 0 25px;
  text-decoration: none;
  color: ${props => props.theme.colors.active};
  border: 1px solid ${props => props.theme.colors.active};
  transition: all 250ms ease-in-out;
  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.active};
  }
   :hover {
    transform: scale(1.05);
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.active};
`;
export const LinkRewiews = styled(NavLink)`
  height: 45px;
  padding: 10px 15px;
  margin-right: 15px;
  border-radius: 0 25px 25px 0;
  text-decoration: none;
  color: ${props => props.theme.colors.active};
  border: 1px solid ${props => props.theme.colors.active};
  transition: all 250ms ease-in-out;
  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.active};
  }
   :hover {
    transform: scale(1.05);
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.active};
`;