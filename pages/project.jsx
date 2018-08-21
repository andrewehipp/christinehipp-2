import React from 'react';

import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Page from '../components/Page';
import Filters from '../components/Filters';
import { FiltersProvider } from '../components/Filters/context.js';

import '../resources/global.scss';

const Project = ({ url }) => {
    const {
        menu,
        project,
    } = url.query;

    return (
        <Container>
            <Header menu={menu} />

            <FiltersProvider>
                <Filters />

                {project.pages.map(page => (
                    <Page key={page.name} {...page} />
                ))}
            </FiltersProvider>

            <Footer />
        </Container>
    );
};


export default Project;
