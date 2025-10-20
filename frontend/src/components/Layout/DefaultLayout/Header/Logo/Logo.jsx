import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles);

function Logo() {
    return (
        <Link className={cx('navbar-brand')} to="/">
            <span>Feane</span>
        </Link>
    );
}

export default Logo;
