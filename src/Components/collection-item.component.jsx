import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../redux/cart/cart-action';
import CustomBUtton from './custom-button.component';

import './collection-item.styles.scss';


const CollectionItem = ({item, addItem}) =>
{
    const {imageUrl,price,name} = item;
return (
    <div className="collection-item">
          <div className="image"  style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomBUtton onClick={()=> addItem(item)} className="custom-button" inverted>
            Add To Cart
        </CustomBUtton>

    </div>
);
};

const mapDispatchToProps = dispatch =>
({
    addItem: item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);