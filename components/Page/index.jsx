import React from 'react';

import Aspect from '../Aspect';
import { Consumer } from '../Filters/context';

import css from './page.scss';

const Page = props => (
    <div className={css.page}>
        <pre>{JSON.stringify(props, 4, 4)}</pre>
        {/* <Aspect {...props.pencils.file.details.image}>
            <Consumer>
                {({ filter }) => (
                    <picture>
                        <source srcSet={`${props[filter].file.url}?w=850&fm=webp`} type="image/webp" />
                        <img src={`${props[filter].file.url}?w=850`} alt="" />
                    </picture>
                )}
            </Consumer>
        </Aspect> */}
    </div>
);

export default Page;
