import styled from "styled-components";
import CrownLogo from '../../assets/crown.png'
export const CheckoutPageContainer = styled.div`  
    width: 58vw;
    min-height: 90vh;
    margin-right: 11vw;
    margin-left: 11vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${CrownLogo})
    margin: 50px auto;
`;
 
export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const CheckoutHeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;
    &:last-child {
        width: 8%;
      }
`;

export const TotalContainer = styled.div` 
    margin-top: 1%;
    margin-left: auto;
    font-size: 1.90rem;
    font-weight: 500;
  
`;
export const SubtotalSpan = styled.span`
    font-size: 50%;
    font-weight: lighter;
    margin: 0;
    padding; 0;
`;

export const TestWarningccinfoContainer = styled.div`
    text-align: center;
    color: red;
    font-size: 2.75rem;
    margin-top: 20px;
    &:button {
            margin-left: auto;
            margin-top: 50px;
          }
    
`;