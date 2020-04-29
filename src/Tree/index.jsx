import React from 'react';

import { CategoryIcon } from './views/CategoryIcon';
import { CategoryName } from './views/CategoryName';


const ChildrenCategories = ({ categories }) => {
    return (
        <ul>
            {
                categories.map((category) => {
                    return (
                        <React.Fragment key={category.id}>
                            <li>
                                <CategoryName
                                    name={category.name}
                                    url={'url'}
                                />
                            </li>
                            {
                                !!category.children?.length && (
                                    <li>
                                        <ChildrenCategories categories={category.children} />
                                    </li>
                                )
                            }
                        </React.Fragment>
                    );
                })
            }
        </ul>
    );
};


const CategoryTree = ({ category }) => {
    return (
        <div
            grid-indent='s'
            grid-wrap='nowrap'
        >
            <div>
                <CategoryIcon
                    url={category.icon_url}
                    alt={category.name}
                />
            </div>
            <div>
                <CategoryName
                    name={category.name}
                    url={'url'}
                />
                <div>
                    <ChildrenCategories categories={category.children} />
                </div>
            </div>
        </div>
    );
};

CategoryTree.Children = ChildrenCategories;


export const Categories = ({ categories }) => {
    return categories.map((category) => {
        return (
            <CategoryTree category={category} />
        );
    });
};
