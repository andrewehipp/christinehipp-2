import React from 'react';

import Header from '../components/Header';
import Filters from '../components/Filters';
import Page from '../components/Page';
import { FiltersProvider } from '../components/Filters/context.js';

import '../resources/global.scss';

const Collection = ({ url }) => {
    const {
        collection,
        menu,
    } = url.query;

    return (
        <div>
            <Header menu={menu} />

            <FiltersProvider>
                <Filters />

                {collection.collection.map(c => (
                    <section key={c.name}>
                        {c.pages.map(page => (
                            <Page key={page.name} {...page} />
                        ))}
                    </section>
                ))}
            </FiltersProvider>
        </div>
    );
};


export default Collection;
