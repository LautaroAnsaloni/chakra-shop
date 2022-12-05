import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Row } from "react-bootstrap";

const Axios = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("https://api.storerestapi.com/products");
      console.log(data);
      setProduct(data.results);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row>
        {error && (
          <div>
            <h4 className="text-danger font-weight-700">
              No hay datos disponibles
            </h4>
          </div>
        )}
      </Row>
      <Row className="g-3 m-auto">
        {product.map((data) => (
          <ProductCard
            key={data.id}
            id={data.id}
            name={data.title}
            image={data.images}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Axios;
