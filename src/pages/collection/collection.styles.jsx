import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
display:flex;
flex-direction: column;
`
export const Title = styled.h2`
font-size: 38px;
margin: 0 auto 30px;
`


export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1.27fr 1.27fr 1.27fr 1.27fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 25px;
  }
`