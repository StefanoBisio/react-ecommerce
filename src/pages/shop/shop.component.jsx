import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component {

    constructor() {
        super() 

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        /*Need to destructure 'collections', not simply declare as 'collections'.
        Without the curly braces we are declaring an array of 'collections' starting with an array of 'collections' inside of it, there would be an extra layer created. Hover on the const to see the overlay helper.*/
        const {collections} = this.state;

        return (
            //We don't want this div to be rendered multiple times
            <div className='shop-page'>
            {
                //The argument starting with three dots stands for all key-value pairs after the id value, who has been declared separately. Hover on it to see the overlay helper.
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
            </div>
        )
    }
}

export default ShopPage;