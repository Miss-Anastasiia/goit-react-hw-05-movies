import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

export const FormInput = styled.input`
  display: inline-block;
  font-size: 20px;
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.buttonBg};
  box-shadow: inset 2px 2px 5px ${props => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
  &:hover {
    box-shadow: inset 1px 1px 2px var(--color-shadow),
      inset -1px -1px 2px var(--color-white);
  }
`;

export const SearchBtn = styled.button`
  background-color: ${props => props.theme.colors.buttonBg};
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  cursor: pointer;
  outline: none;
  appearance: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.active};
  }
  &:focus {
    opacity: 2;
  }
`;