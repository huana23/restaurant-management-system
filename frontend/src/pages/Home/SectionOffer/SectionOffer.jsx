import classNames from 'classnames/bind';
import styles from './SectionOffer.module.scss';

import imgItem1 from '../../../assets/images/o1.jpg';
import imgItem2 from '../../../assets/images/o2.jpg';

const cx = classNames.bind(styles);

const offers = [
  {
    title: "Tasty Thursdays",
    discount: "20%",
    img: imgItem1,
    alt: "Tasty Thursdays",
  },
  {
    title: "Pizza Days",
    discount: "10%",
    img: imgItem2,
    alt: "Pizza Days",
  },
];

// Tách icon SVG ra component riêng
function CartIcon() {
  return (
    <svg
      version="1.1"
      viewBox="0 0 456.029 456.029"
      style={{ enableBackground: "new 0 0 456.029 456.029" }}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
            c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
            C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
            c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
            C457.728,97.71,450.56,86.958,439.296,84.91z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
            c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
        </g>
      </g>
    </svg>
  );
}

function SectionOffer() {
  return (
    <section className={`layout_padding-bottom ${cx('offer_section')}`}>
      <div className="offer_container">
        <div className="container">
          <div className="row">

            {offers.map((item, index) => (
              <div className="col-md-6" key={index}>
                <div className={cx('box')}>
                  <div className={cx('img-box')}>
                    <img src={item.img} alt={item.alt} />
                  </div>

                  <div className={cx('detail-box')}>
                    <h5>{item.title}</h5>
                    <h6>
                      <span>{item.discount}</span> Off
                    </h6>

                    
                    <a href="#!">
                      Order Now <CartIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOffer;
