import React from 'react';
import './collection-preview.component.scss';

/* The job of this component is to display the title of a category of clothing, and a few products inside of it (a preview).
The prop 'title' being one of the 5 categories of products, 'items' being the products under every category. See shop.data.js for reference.
The props used aren't passed explicitly to this component, but through the ...otherCollectionProps method, */

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                //Resume from here: need to show less than four per category, as the component is meant to render a preview of the products. 4 max
                items.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;