import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 10px;
`;
export const FilterInput = styled.input`
   padding: 8px;
  background: transparent;
  border: 2px solid #6aa0d6;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 16px;
  &:focus {
    outline: 1px solid #6aa0d6;
  }
`;
