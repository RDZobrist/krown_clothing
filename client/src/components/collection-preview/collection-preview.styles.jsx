import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-radius: 3px;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
  
`;

export const TitleContainer = styled.h1`
  font-size: 24px;
  font-weight:600;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

TitleContainer.displayName = 'TitleContainer';

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;