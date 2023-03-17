import styled from 'styled-components';

export const CastItem = styled.div`
  padding: 5px;
  background-color: ${props => props.theme.colors.buttonBg};
  margin-right: 10px;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    cursor: pointer;
  }
`;

export const ImageCast = styled.img`
  border-radius: 15px 15px 0 0;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;