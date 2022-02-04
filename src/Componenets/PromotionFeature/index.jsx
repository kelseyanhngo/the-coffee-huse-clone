import React from 'react';
import PromotionDetail from './../PromotionDetail/index';

import './styles.scss'

function PromotionFeature({items}) {
    return (
        <ul className="promotion-feature">
        {items.map(item => (
            <li key={item.id}>
                <PromotionDetail detail ={item} />
            </li>
        ))}
    </ul>
    );
}

export default PromotionFeature;