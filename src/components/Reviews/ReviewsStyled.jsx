import styled from 'styled-components';

export const NoReviews = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ReviewsItem = styled.li`
  border: 1px solid ${props => props.theme.colors.active};
  border-radius: 15px 15px 0 0;
  padding: 15px;
  margin-bottom: 10px;
`;

export const ReviewsList = styled.ul``;

export const ReviewText = styled.p`
  color: ${props => props.theme.colors.active};
`;