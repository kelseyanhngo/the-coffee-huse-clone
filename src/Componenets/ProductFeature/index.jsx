import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import ProductDetail from '../ProductDetail';
import classnames from "classnames";


ProductFeature.propTypes = {
    
};

function ProductFeature({feature, onItemClick}) {
    const handleClick = (item, idx) => {
        if(!onItemClick) return;
        onItemClick(item, idx)
    }
    return (
        <ul className="prod__feature">
            {feature && feature.map((item, idx) => ( //feature đầu tiên dùng để kiêmr tra xem có data hay không, kiểu như if(feature). nếu có thì mới chạy, ko thì ko chạy.
                <li key={item.id} className={classnames({
                    FC: item.type === 'FC',
                    CF: item.type === 'CF',
                    tea: item.type === 'tea',
                    smoothy: item.type === 'smoothy',
                    cake: item.type === 'cake'
                })}
                
                onClick={()=>{handleClick(item, idx)}}
                >
                <ProductDetail detail = {item}/>

                </li>
            ))}
        </ul>
    );
}

export default ProductFeature;