import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 13.67vh;
  height: 13.67vh;
  border: .202rem solid rgba(188, 188, 188, 0.88);
  border-radius: 50%;
  border-top-color: #626767;
  animation: spin 421ms ease-in-out infinite;
  -webkit-animation: spin 421ms ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(-360deg);
    }
  }
`;