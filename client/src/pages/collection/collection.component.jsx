import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { CollectionPageeContainer, CollectionTitle, CollectionItemsContainer } from "./collection.styles";
import { selectCollection, selectCollections } from "../../redux/shop/shop.selectors";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";
// import './collection.styles.scss';
import { getPerformance } from "firebase/performance";
 getPerformance();
const CollectionPage = ({ collection }) => {
    if (collection != undefined){
    const { title, items } = collection;
    return (
        <CollectionPageeContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>

                {
                    items.map(item => (
                            <CollectionItem key={item.id} item={item} />
                    )
                    )
                }

            </CollectionItemsContainer>
        </CollectionPageeContainer>
    );
}
else return <ErrorBoundary/>
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)