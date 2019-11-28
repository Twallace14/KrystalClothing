import React from 'react';
import { Route } from 'react-router-dom'
import Collection from '../Collection/Collection'

import CollectionsOverview from '../../collectionsOverview/collectionsOverview';


const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
);




export default ShopPage;