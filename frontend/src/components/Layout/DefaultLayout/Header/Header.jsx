import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import bgHero from '../../../../assets/images/hero-bg.jpg';
import Logo from './Logo';
import NavbarHeader from './NavbarHeader';
import OptionHeader from './OptionHeader';
import BannerHeader from './BannerHeader';
import { useState } from 'react';


const cx = classNames.bind(styles);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={cx('hero_area')}>
            <div className={cx('bg-box')}>
                <img src={bgHero} alt="HERO_BRAND" />
            </div>
            <header className={cx('header_section')}>
                <div className="container">
                    <nav className={`navbar navbar-expand-lg ${cx('custom_nav-container')}`}>
                        <Logo />
                        <button
                            className={`navbar-toggler ${cx('navbar-toggler')}`}
                            type="button"
                            onClick={toggleMenu}
                            aria-label="Toggle navigation"
                        >
                            <span> </span>
                        </button>
                        <div
                            className={classNames('collapse navbar-collapse', {
                                show: isMenuOpen,
                            })}
                            id="navbarSupportedContent"
                        >
                            <NavbarHeader />
                            <OptionHeader />
                        </div>
                    </nav>
                </div>
            </header>
            <BannerHeader />
        </div>
    );
}

export default Header;
