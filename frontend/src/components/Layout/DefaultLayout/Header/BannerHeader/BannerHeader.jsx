import classNames from 'classnames/bind';
import styles from './BannerHeader.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function BannerHeader() {
    const slides = [
        {
            title: 'Fast Food Restaurant',
            desc: 'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam, maxime, delectus eaque fugit! Phasellus vehicula, sapien id luctus gravida, purus metus commodo elit, a ultrices justo nibh eu erat.',
        },
        {
            title: 'Delicious Burgers',
            desc: 'Enjoy mouth-watering burgers with fresh ingredients and sizzling taste, served hot and fast. From classic cheeseburgers to gourmet creations, each bite is a perfect harmony of flavors that will leave you craving for more. Perfect for lunch, dinner, or any time you want a delicious treat!',
        },
        {
            title: 'Fresh & Hot Pizza',
            desc: 'Taste the best pizzas in town made with love, cheese, and perfect dough. Our pizzas are baked to perfection in traditional ovens, with toppings ranging from classic margherita to exotic combinations, delivering an unforgettable experience for your taste buds. Fresh ingredients, bold flavors, and crispy crust await you.',
        },
    ];

    return (
        <section className={cx('slider_section')}>
            <div className="container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000 }}
                    pagination={{
                        el: '.' + cx('custom-pagination'),
                        clickable: true,
                    }}
                    loop={true}
                    className={cx('slider')}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="row">
                                <div className="col-md-7 col-lg-6 ">
                                    <div className={cx('detail-box')}>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.desc}</p>
                                        <div className="btn-box">
                                            <Link to="/order" className="btn1">
                                                Order Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className={cx('custom-pagination')} />
                </Swiper>
            </div>
        </section>
    );
}

export default BannerHeader;
