import React from 'react';
import PropTypes from 'prop-types';


export const CategoryName = ({ name, url }) => {
    return (
        <a href={url}>
            <span>{name}</span>
        </a>
    );
};


CategoryName.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
