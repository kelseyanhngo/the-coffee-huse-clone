import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

HeaderList.propTypes = {
    
};

function HeaderList({hList}) {
    return (
        <ul>
        {hList.map((Item, id) =>
        (
            <li key={id}>
              <NavLink to={Item.link}>
                <p>{Item.tilte_link}</p>
              </NavLink>
            </li>
          ) 
        )}
      </ul>
    );
}

export default HeaderList;