import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';


const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer_section')}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className={cx('footer_contact')}>
              <h4>Contact Us</h4>
              <div className={cx('contact_link_box')}>
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span>Location</span>
                </a>
                <a href="#">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>Call +01 1234567890</span>
                </a>
                <a href="#">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className={cx('footer_detail')}>
              <a href="#" className={cx('footer-logo')}>
                Feane
              </a>
              <p>
                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div className={cx('footer_social')}>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10.00 AM - 10.00 PM</p>
          </div>
        </div>
        <div className={cx('footer-info')}>
          <p>
            © {new Date().getFullYear()} All Rights Reserved By Ann
            <br />
            <br />
            © {new Date().getFullYear()} Distributed By Ann
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
