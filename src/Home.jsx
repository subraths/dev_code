import axios from "axios";
import { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

function withTheme(Component) {
  return (props) => <Component {...props} theme={useContext(ThemeContext)} />;
}

class Home extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .then((data) => this.setState({ products: data }));
  }
  render() {
    const productsElement = this.state.products.map((product) => (
      <Link key={product.id} to={`${product.id}`}>
        <img src={product.image} />
        <h3>{product.title}</h3>
      </Link>
    ));
    return (
      <div className={`product-container ${this.props.theme.theme}`}>
        {productsElement}
      </div>
    );
  }
}

export default withTheme(Home);
