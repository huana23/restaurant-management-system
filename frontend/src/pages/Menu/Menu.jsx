import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import img1 from '../../assets/images/f1.png';
import img2 from "../../assets/images/f2.png";
import img3 from "../../assets/images/f3.png";
import img4 from "../../assets/images/f4.png";
import img5 from "../../assets/images/f5.png";
import img6 from "../../assets/images/f6.png";
import img7 from "../../assets/images/f7.png";
import img8 from "../../assets/images/f8.png";
import img9 from "../../assets/images/f9.png";

const cx = classNames.bind(styles);

const foods = [
  { title: "Delicious Pizza", price: "$15", type: "pizza", img: img1, alt: "Delicious Pizza" },
  { title: "Delicious Burger", price: "$15", type: "burger", img: img2, alt: "Delicious Burger" },
  { title: "Delicious Pizza", price: "$17", type: "pizza", img: img3, alt: "Delicious Pizza" },
  { title: "Delicious Pasta", price: "$18", type: "pasta", img: img4, alt: "Delicious Pasta" },
  { title: "French Fries", price: "$10", type: "fries", img: img5, alt: "French Fries" },
  { title: "Delicious Pizza", price: "$15", type: "pizza", img: img6, alt: "Delicious Pizza" },
  { title: "Tasty Burger", price: "$12", type: "burger", img: img7, alt: "Tasty Burger" },
  { title: "Tasty Burger", price: "$14", type: "burger", img: img8, alt: "Tasty Burger" },
  { title: "Delicious Pasta", price: "$10", type: "pasta", img: img9, alt: "Delicious Pasta" },
];

function Menu() {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  
  const filteredFoods = filter === "all" ? foods : foods.filter(food => food.type === filter);

  
  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  
  const currentFoods = filteredFoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if(page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className={`layout_padding-bottom, pt-5 ${cx('food_section')}`}>
      <div className="container">
        <div className={cx('heading_container', 'heading_center')}>
          <h2>Our Menu</h2>
        </div>

        <ul className={cx('filters_menu')}>
          {["all", "burger", "pizza", "pasta", "fries"].map(type => (
            <li
              key={type}
              className={filter === type ? cx("active") : ""}
              onClick={() => {
                setFilter(type);
                setCurrentPage(1);
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </li>
          ))}
        </ul>

        <p>Total Product: {filteredFoods.length}</p>

        <div className="filters-content">
          <div className="row grid">
            {currentFoods.map((food, index) => (
              <div key={index} className={`col-sm-6 col-lg-4 all ${food.type}`}>
                <div className={cx('box')}>
                  <div>
                    <div className={cx('img-box')}>
                      <img src={food.img} alt={food.alt} />
                    </div>
                    <div className={cx('detail-box')}>
                      <h5>{food.title}</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className={cx('options')}>
                        <h6>{food.price}</h6>
                        <a href="#">🛒</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className={cx('pagination')}>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? cx('active') : ''}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default Menu;
