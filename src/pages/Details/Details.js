import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../../assets/BackArrow";
import CheckoutBag from "../../assets/ChackoutBag";
import styles from "./Details.module.css";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [params.productId]);

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsNav}>
        <BackArrow
          className={styles.detailsNavIcon}
          onClick={() => navigate(-1)}
        />
        <CheckoutBag
          className={styles.detailsNavIcon}
          onClick={() => navigate("/checkout", { state: { product } })}
        />
      </div>
      <div className={styles.detailsWrapper}>
        <div>
          <h3>{product?.title}</h3>
          <p>{product?.description}</p>
          <p><i><b>Category :</b>  {product?.category}</i> </p>
        </div>
        <div>
          <img
            className={styles.detailsImage}
            src={product?.image}
            alt={product?.title}
          />
            <h2>{product?.price} $</h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
