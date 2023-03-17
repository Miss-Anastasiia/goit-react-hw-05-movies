import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Contant = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Container = ({ children }) => {
  return <Contant>{children}</Contant>;
};

Container.propTypes = {
  children: PropTypes.node,
};