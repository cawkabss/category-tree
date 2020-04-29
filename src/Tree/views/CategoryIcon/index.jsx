import React from 'react';
import PropTypes from 'prop-types';


export const CategoryIcon = ({ url, alt }) => {
    return (
        <div>
            <img
                src={url}
                alt={alt}
            />
        </div>
    );
};


CategoryIcon.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
