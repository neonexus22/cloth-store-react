import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.css";

const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item._id} item={item} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
