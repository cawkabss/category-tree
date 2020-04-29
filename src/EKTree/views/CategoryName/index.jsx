import React from 'react';
import PropTypes from 'prop-types';

import { Link, Text } from '../../../EvoKit';


export const CategoryName = ({ name, url }) => {
    return (
        <Link href={url}>
            <Text>{name}</Text>
        </Link>
    );
};


CategoryName.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
