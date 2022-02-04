import React from 'react';
import NewsDetail from '../NewsDetail';
import './styles.scss';



function NewsFeature({items}) {
    return (
        <ul className="news-feature">
            {items.map(item => (
                <li key={item.id}>
                    <NewsDetail detail ={item} />
                </li>
            ))}
        </ul>
    );
}

export default NewsFeature;