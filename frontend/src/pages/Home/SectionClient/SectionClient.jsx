import classNames from 'classnames/bind';
import styles from './SectionClient.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import imgCustomer1 from '../../../assets/images/client1.jpg';
import imgCustomer2 from '../../../assets/images/client2.jpg';

const cx = classNames.bind(styles);

function SectionClient() {
    const clients = [
        {
            name: "Moana Michell",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            position: "magna aliqua",
            img: imgCustomer1,
        },
        {
            name: "Mike Hamell",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            position: "magna aliqua",
            img: imgCustomer2,
        },
        {
            name: "Moana Michell",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            position: "magna aliqua",
            img: imgCustomer1,
        },
        {
            name: "Mike Hamell",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            position: "magna aliqua",
            img: imgCustomer2,
        },
    ];

    return (
        <div className={`layout_padding-bottom ${cx('client_section')}`}>
            <div className="container">
                <div className={`heading_center psudo_white_primary mb_45 ${cx('heading_container')}`}>
                    <h2>What Says Our Customers</h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index}>
                                    <div className={cx('box')}>
                                        <div className={cx('detail-box')}>
                                            <p>{client.feedback}</p>
                                            <h6>{client.name}</h6>
                                            <p>{client.position}</p>
                                        </div>
                                        <div className={cx('img-box')}>
                                            <img src={client.img} alt={client.name} />
                                        </div>
                                    </div>

                        </SwiperSlide>
                    ))}
                    <div className={cx('custom-pagination')} />
                </Swiper>
            </div>
        </div>
    );
}

export default SectionClient;
