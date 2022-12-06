import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Row } from "react-bootstrap";

const Axios = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const [paginador, setPaginador] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.storerestapi.com/products?limit=10&page=1`);
        console.log(data);
        setProduct(data.results);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [])

  

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
        {product?.map((d) => (
          <ProductCard
            key={d.id}
            id={d.id}
            name={d.title}
            image={d.images}
          />
        ))}
      </Row>
      <Row>
            <div className="btn-group m-auto my-5 d-flex" role="group" aria-label="Basic example">
              <button type="button" onClick={() => setPaginador((paginador) => paginador - 1)} className={(paginador - 1) ? "btn btn-outline-warning p-3 text-dark" : "btn btn-danger p-3 disabled"}>Atras</button>
              <button type="button" onClick={() => setPaginador((paginador) => paginador + 1)} className={(paginador + 1) ? "btn btn-outline-warning p-3 text-dark" : "btn btn-danger p-3 disabled"}>Siguiente</button>
            </div>
          </Row>
    </Container>
  );
};

export default Axios;
