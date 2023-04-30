import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: block;
  align-items: center;
  gap: 50px;
  width: 300px;
  background-color: transparent;
  padding: 10px 5px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Username = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const LogOutButton = styled.button`
  background-color: #6aa0d6;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c42f2f;
  }
`;