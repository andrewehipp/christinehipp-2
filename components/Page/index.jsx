import React from 'react';

import Aspect from '../Aspect';
import { Consumer } from '../Filters/context';

import css from './page.scss';

const Page = props => (
    <div className={css.page}>
        <Aspect>
            <Consumer>
                {({ filter }) => (
                    props[filter] ? (
                        <picture>
                            <source srcSet={`${props[filter].file.url}?w=850&fm=webp`} type="image/webp" />
                            <img src={`${props[filter].file.url}?w=850`} alt="" />
                        </picture>
                    ) : null
                )}
            </Consumer>
        </Aspect>
    </div>
);

export default Page;
