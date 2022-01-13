import React, {Suspense, lazy, useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionStartAsync, fetchCollectionStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import './shop.styles'
import { ShopPageContainer } from './shop.styles';
const CollectionOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));
import { getPerformance } from "firebase/performance";
getPerformance();
const ShopPage = ({ match, fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart])
   
   
        return(
        <ShopPageContainer>
          <Suspense fallback={<Spinner/>}>
          <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
          <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}  />
          </Suspense>
          </ShopPageContainer>
        )
    
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})
export default connect(null,mapDispatchToProps)(ShopPage);
