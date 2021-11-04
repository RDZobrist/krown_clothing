import styled from "styled-components";

export const CheckoutPageContainer = styled.div`  
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
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
    font-size: 1.75rem;
    font-weight: 500;
  
`;
export const SubtotalSpan = styled.span`
    font-size: 66.6667%;
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