import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavbarHeader.module.scss';

const cx = classNames.bind(styles);

function NavbarHeader() {
    return (
        <ul className={`navbar-nav mx-auto ${cx('navbar-nav')}`}>
            <li className={cx('nav-item', 'active')}>
                <Link className={cx('nav-link')} to="/">
                    Home
                </Link>
            </li>
            <li className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="/menu">
                    Menu
                </Link>
            </li>
            <li className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="/about">
                    About
                </Link>
            </li>
            <li className={cx('nav-item')}>
                <Link className={cx('nav-link')} to="/book">
                    Book Table
                </Link>
            </li>
        </ul>
    );
}

export default NavbarHeader;
