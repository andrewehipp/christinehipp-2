const withSass = require('@zeit/next-sass');
const contentful = require('contentful');

const client = contentful.createClient({
    space: '41bp2s4ddqr1',
    accessToken: 'ca71e26b58201a730e770b76d879f2e8477379319904020413312ba90f76a268',
    include: 10,
});

module.exports = withSass({
    cssModules: true,
    async exportPathMap() {
        const pages = {};

        const menu = await client.getEntries({
            content_type: 'menus',
            include: 10,
            'fields.name[in]': 'Main',
        })
            .then(res => res.items[0].fields.pages)
            .then(res => res.map(page => page.fields))
            .then(res => res.map(page => ({
                ...page,
                slug: page.slug === 'home' ? '' : page.slug,
            })));

        const collections = await client.getEntries({
            content_type: 'collection',
            include: 10,
        })
            .then(res => res.items.map(item => item.fields))
            .then(res => res.map(collection => ({
                ...collection,
                content: collection.content.map(item => ({
                    ...item.fields,
                    pages: item.fields.pages
                        .map(page => page.fields)
                        .map(page => ({
                            ...page,
                            pencils: page.pencils ? page.pencils.fields : false,
                            inks: page.inks ? page.inks.fields : false,
                            fullColor: page.fullColor ? page.fullColor.fields : false,
                        })),
                })),
            })));

        collections.forEach((collection) => {
            const slug = collection.slug === 'home' ? '/' : `/${collection.slug}`;

            pages[slug] = {
                page: '/collection',
                query: {
                    menu,
                    collection,
                },
            };
        });

        const projects = await client.getEntries({
            content_type: 'projects',
            include: 10,
        })
            .then(res => res.items.map(item => item.fields))
            .then(res => res.map(item => ({
                ...item,
                pages: item.pages
                    .map(page => page.fields)
                    .map(page => ({
                        ...page,
                        pencils: page.pencils ? page.pencils.fields : false,
                        inks: page.inks ? page.inks.fields : false,
                        fullColor: page.fullColor ? page.fullColor.fields : false,
                    })),
            })));
            // .then(res => res.map(item => ({
            //     ...item.fields,
            //     pages: item.pages.map(page => ({
            //         ...page.fields,
            //         pencils: page.fields.pencils.fields || false,
            //         inks: page.fields.inks.fields || false,
            //         fullColor: page.fields.fullColor.fields || false,
            //     })),
            // })));
            //
        projects.forEach((project) => {
            pages[`/${project.slug}`] = {
                page: '/project',
                query: {
                    menu,
                    project,
                },
            };
        });

        // console.log(JSON.stringify(projects, 4, 4));
        console.log(projects);

        return pages;
    },
});
