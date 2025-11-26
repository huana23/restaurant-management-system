import classNames from 'classnames/bind';
import styles from './About.module.scss';
import imgItem from '../../assets/images/about-img.png';


const cx = classNames.bind(styles);

function About() {
    return <div className={`layout_padding my-5 py-5 ${cx('about_section')}`}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className={cx('img-box')}>
                        <img src={imgItem} alt='About_img' />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={cx('detail-box')}>
                        <div className="heading_container">
                            <h2>
                                We Are Feane
                            </h2>
                        </div>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                            the middle of text. All
                        </p>
                        <a href>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default About;