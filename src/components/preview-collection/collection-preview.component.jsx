import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

/* The job of this component is to display the title of a category of clothing, and a few products inside of it (a preview).
The prop 'title' being one of the 5 categories of products, 'items' being the products under every category. See shop.data.js for reference.
The props used aren't passed explicitly to this component, but through the ...otherCollectionProps method, */

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;