import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 65vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 90px;
  height: 90px;
  border: 1.234567rem solid rgba(138, 138, 138, 0.48);
  border-radius: 50%;
  border-top-color: #626767;
  animation: spin 900ms ease-in-out infinite;
  -webkit-animation: spin 950ms ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(900deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(-720deg);
    }
  }
`;