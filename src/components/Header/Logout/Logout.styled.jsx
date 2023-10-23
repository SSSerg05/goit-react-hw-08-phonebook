import styled from "@emotion/styled/macro";


export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 37px;

  position: relative;
  overflow: hidden;
  border-radius: 4px;
  min-width: 75px;
  max-width: 120px;
  color: #1976d2;
`;

export const LoginText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.85rem;
  color: var(--color-text);
`;

export const LogoutText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.85rem;
  color: white;
`;

export const LogoutOverlay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: orangered;
    color: white;
    
    opacity: 0;
    transform: translateY(100%);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LogoutLink = styled.a`
    text-decoration: none;
    display: inline-block;
    outline: none;
    color: transparent;
    background-color: transparent;

    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover ${LogoutOverlay} { 
    opacity: 1;
    transform: translateY(0);
  }
`;