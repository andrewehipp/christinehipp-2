import React from 'react';

import Container from '../Container';

import css from './footer.scss';

const Footer = () => (
    <footer className={css.footer} role="contentinfo">
        <Container>
            <p>
                &copy; Christine Hipp {new Date().getFullYear()}
            </p>
        </Container>
    </footer>
);

export default Footer;
