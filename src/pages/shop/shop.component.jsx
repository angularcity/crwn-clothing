import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionsPage from "./../collection/collection.component";

// Since Route auto passes the match to Shop
// In App.js,  <Route path="/shop" component={ShopPage} />
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
    </div>
  );
};

export default ShopPage;
