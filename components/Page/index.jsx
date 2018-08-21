import React from 'react';

import Aspect from '../Aspect';
import { Consumer } from '../Filters/context';

import css from './page.scss';

const Page = props => (
    <div className={css.page}>
        <Consumer>
            {({ filter }) => (
                props[filter] ? (
                    <Aspect {...props[filter].file.details.image}>
                        <picture>
                            <source srcSet={`${props[filter].file.url}?w=850&fm=webp`} type="image/webp" />
                            <img src={`${props[filter].file.url}?w=850`} alt="" />
                        </picture>
                    </Aspect>
                ) : null
            )}
        </Consumer>
    </div>
);

export default Page;
