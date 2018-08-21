import React from 'react';
import Link from 'next/link';

import css from './header.scss';

const Header = ({ menu }) => (
    <header className={css.header} role="banner">
        <div className={css.row}>
            <div className="c-header__block">
                <Link href="/">
                    <a className={css.lockup}>
                        <h2 className={css.title}>Christine Hipp</h2>
                        <h4 className={css.tag}>Comic Artist</h4>
                    </a>
                </Link>
            </div>

            <div className="c-header__block">
                <nav className={css.nav} role="navigation">
                    <ul className={css.navList}>
                        <li className={css.navItem}>
                            <a href="mailto:christinelhipp@gmail.com" target="_blank" className={css.navLink}>christinelhipp@gmail.com</a>
                        </li>
                    </ul>
                    <ul className={css.navList}>
                        {menu.map(item => (
                            <li key={item.name} className={css.navItem}>
                                <a href={`/${item.slug}`} className={css.navLink}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;
