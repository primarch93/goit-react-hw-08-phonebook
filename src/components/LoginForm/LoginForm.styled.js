import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 300px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2e8b57;
  }
`;

