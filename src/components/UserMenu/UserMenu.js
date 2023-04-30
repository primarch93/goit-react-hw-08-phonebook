import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Wrapper, Username, LogOutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutButton>
    </Wrapper>
  );
};
