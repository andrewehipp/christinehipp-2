import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import Container from '../components/Container';
import Footer from '../components/Footer';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <title>
                        Christine Hipp - Comic Artist
                    </title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
                    <link rel="stylesheet" href="/_next/static/style.css" />

                    <meta property="og:type" content="website" />

                    <link rel="icon" type="image/png" href="stateoc/img/meta/favicon.ico" sizes="32x32" />
                </Head>
                <body>
                    <Container>
                        <Main />
                    </Container>

                    <Footer />

                    <NextScript />
                </body>
            </html>
        );
    }
}
