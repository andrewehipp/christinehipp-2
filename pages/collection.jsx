import React from 'react';
import Head from 'next/head'

import Header from '../components/Header';
import Filters from '../components/Filters';
import Page from '../components/Page';
import { FiltersProvider } from '../components/Filters/context.js';

import '../resources/global.scss';

const Collection = ({ url, pathname }) => {
    const {
        collection,
        menu,
    } = url.query;

    const metaImageSrc = collection.content[0].pages[0].fullColor
        || collection.content[0].pages[0].ink
        || collection.content[0].pages[0].pencil;

    return (
        <div>
            <Head>
                <title>{`${collection.name} - Christine Hipp - Comic Artist`}</title>
                <meta property="og:title" content={`${'fsdf'} Christine Hipp - Comic Artist`} />
                <meta property="og:description" content="" />
                <meta name="description" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`http://christinehipp.com${pathname}`} />
                <meta property="og:image" content={`${metaImageSrc.file.url}?fit=fill&f=top&w=1200&h=1200`} />

                <link rel="icon" type="image/png" href="stateoc/img/meta/favicon.ico" sizes="32x32" />
            </Head>

            <Header menu={menu} />

            <FiltersProvider>
                <Filters />
                {collection.content.map((c, cIndex) => (
                    <section key={`${cIndex}-${c.name}`}>
                        {c.pages.map((page, pageIndex) => (
                            <Page key={`${cIndex}-${pageIndex}-${page.name}`} {...page} />
                        ))}
                    </section>
                ))}
            </FiltersProvider>
        </div>
    );
};


export default Collection;
