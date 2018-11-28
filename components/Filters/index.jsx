import React from 'react';
import cc from 'classcat';

import { filters, Consumer } from './context.js';

import css from './filters.scss';

const Filters = ({ inks, fullColor, pencils }) => (
    <Consumer>
        {({ filter, setFilter }) => (
            <ul className={css.filters}>
                {filters.map((f, filterIndex) => {

                    if (!filters[f.value]) {
                        return null;
                    }

                    const handleClick = () => {
                        setFilter(filterIndex);
                    };

                    const classes = cc([
                        css.button,
                        {
                            [css.buttonActive]: f.value === filter,
                        },
                    ]);

                    return (
                        <li key={f.value} className={css.item}>
                            <button type="button" className={classes} onClick={handleClick}>
                                {f.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        )}
    </Consumer>
);


export default Filters;
