import { StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </>
  );
};
