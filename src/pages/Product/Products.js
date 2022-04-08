import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className={styles.productContainer}>
      <div className={styles.products}>
        {products.map((each) => (
          <Link
            to={`details/${each.id}`}
            key={each.id}
            className={styles.product}>
            <img style={{ width: "100px" }} src={each.image} alt="" />
            <h4>{each.category}</h4>
            <p>{each.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
