import classNames from 'classnames/bind';
import styles from './BookTable.module.scss';

const cx = classNames.bind(styles);


function BookTable() {
    return <div className={`layout_padding ${cx('book_section')}`}>
        <div className="container">
            <div className={cx('heading_container')}>
                <h2>
                    Book A Table
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className={cx('form_container')}>
                        <form action>
                            <div>
                                <input type="text" className={cx('form-control')} placeholder="Your Name" />
                            </div>
                            <div>
                                <input type="text" className={cx('form-control')} placeholder="Phone Number" />
                            </div>
                            <div>
                                <input type="email" className={cx('form-control')} placeholder="Your Email" />
                            </div>
                            <div>
                                <select className={`nice-select wide ${cx('form-control')}`}>
                                    <option value disabled selected>
                                        How many persons?
                                    </option>
                                    <option value>
                                        2
                                    </option>
                                    <option value>
                                        3
                                    </option>
                                    <option value>
                                        4
                                    </option>
                                    <option value>
                                        5
                                    </option>
                                </select>
                            </div>
                            <div>
                                <input type="date" className={cx('form-control')} />
                            </div>
                            <div className={cx('btn_box')}>
                                <button>
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="map_container">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d342.1460428924259!2d108.0627129938338!3d15.876440403565914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zdGhvbiBn4bqnbiBUYW0gSMOyYSwgeMOjIMSQ4bqhaSBRdWFuZywgxJDhuqFpIEzhu5ljLCBRdeG6o25nIE5hbQ!5e0!3m2!1svi!2s!4v1764049389365!5m2!1svi!2s"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

            </div>
        </div>
    </div>;


}

export default BookTable;