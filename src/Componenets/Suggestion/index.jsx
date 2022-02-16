import React from 'react';
import PropTypes from 'prop-types';
import SuggestionFeature from '../SuggestionFeature';
import './styles.scss'
import classnames from 'classnames';

Sugesstion.propTypes = {
    
};

function Sugesstion({item, onSugClick}) {
    const handleClick = (itm, idx) => {
        if(!onSugClick) return;
        onSugClick(itm, idx)
    }
    return (
        <ul 
        data-aos='zoom-in'
      data-aos-delay='0'
      data-aos-duration='800'
      data-aos-easing='ease'
        className="sugItem">
            {item.map((itm, idx) => (
                <li key={itm.id}
                className={classnames({
                    "sug-item": true,
                    suggestion: itm.sug === 'sug'
                })}
                onClick={()=>handleClick(itm, idx)}
                > 
                <SuggestionFeature feature = {itm}/>
                 </li>
            ))}
        </ul>
    );
}

export default Sugesstion;