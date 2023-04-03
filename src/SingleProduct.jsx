import axios from "axios";
import { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

function withParamsAndTheme(Component) {
  return (props) => (
    <Component
      {...props}
      params={useParams()}
      theme={useContext(ThemeContext)}
    />
  );
}

class SingleProduct extends Component {
  state = {
    product: {},
  };
  componentDidMount() {
    const { id } = this.props.params;
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({ product: data });
      });
  }

  render() {
    const { id, image, price, rating, title, category, description } =
      this.state.product;

    return (
      <div className={this.props.theme.theme} style={{ height: "100vh" }}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{description}</p>
      </div>
    );
  }
}

export default withParamsAndTheme(SingleProduct);
