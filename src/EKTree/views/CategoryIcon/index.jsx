import React from 'react';
import PropTypes from 'prop-types';

import { Image, Box } from '../../../EvoKit';


export const CategoryIcon = ({ url, alt }) => {
    return (
        <Box>
            <Image
                src={url}
                alt={alt}
            />
        </Box>
    );
};


CategoryIcon.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
