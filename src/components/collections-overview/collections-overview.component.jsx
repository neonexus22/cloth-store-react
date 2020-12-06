import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

import "./collections-overview.styles.css";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map((item) => (
        <CollectionPreview key={item._id} {...item} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
