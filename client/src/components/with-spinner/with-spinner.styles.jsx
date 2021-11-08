import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
min-width: 25vw;
height: 4.237vh;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 90px;
  height: 90px;
  border: 2.12rem solid rgba(113, 113, 113, 0.48);
  border-radius: 520%;
  border-top-color: #626767;
  animation: spin 585ms ease-in-out infinite;
  -webkit-animation: spin 585ms ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(540deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(-720deg);
    }
  }
`;