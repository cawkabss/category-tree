import React from 'react';

import { Grid, Box, List } from '../EvoKit';

import { CategoryIcon } from './views/CategoryIcon';
import { CategoryName } from './views/CategoryName';


const ChildrenCategories = ({ categories }) => {
    return (
        <List>
            {
                categories.map((category) => {
                    return (
                        <React.Fragment key={category.id}>
                            <List.Item>
                                <CategoryName
                                    name={category.name}
                                    url={'url'}
                                />
                            </List.Item>
                            {
                                !!category.children?.length && (
                                    <List.Item>
                                        <ChildrenCategories categories={category.children} />
                                    </List.Item>
                                )
                            }
                        </React.Fragment>
                    );
                })
            }
        </List>
    );
};


const CategoryTree = ({ category }) => {
    return (
        <Grid
            grid-indent='s'
            grid-wrap='nowrap'
        >
            <Grid.Item>
                <CategoryIcon
                    url={category.icon_url}
                    alt={category.name}
                />
            </Grid.Item>
            <Grid.Item grid-item-width='expand'>
                <CategoryName
                    name={category.name}
                    url={'url'}
                />
                <Box box-margin-top='xxs'>
                    <ChildrenCategories categories={category.children} />
                </Box>
            </Grid.Item>
        </Grid>
    );
};


export const Categories = ({ categories }) => {
    return categories.map((category) => {
        return (
            <CategoryTree category={category} />
        );
    });
};
