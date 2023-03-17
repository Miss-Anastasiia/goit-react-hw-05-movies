import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Section = styled.section`
  display: flex;
  margin-top: 15px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primaryText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
`;

const CardInfoContainer = styled.div`
  padding: 0 10px;
`;

const MainMovieTitle = styled.h2`
  font-size: 26px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primaryText};
`;

const SecondaryMovieTitle = styled.h3`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primaryText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieList = styled.ul`
  display: grid;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

const MovieItem = styled.li`
  width: 100%;
  display: block;
  padding: 5px;
  background-color: ${props => props.theme.colors.buttonBg};
  transform: scale(1);
  transition: transform 250ms linear;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const MovieText = styled.p`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.grey};
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Img = styled.img`
  border-radius: 15px 15px 0 0;
  max-width: 300px;
`;

const ImageFilm = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 150px
`;

export {
  CardInfoContainer,
  Title,
  MainMovieTitle,
  LinkStyled,
  SecondaryMovieTitle,
  MovieList,
  MovieItem,
  MovieText,
  Img,
  ImageFilm,
  Section,
};