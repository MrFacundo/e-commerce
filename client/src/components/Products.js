import React, { Component } from "react";
import "./Products.css";
import StarRatings from "react-star-ratings";

// import { useQuery, gql } from "@apollo/client";

import { FaStar } from "react-icons/fa";

// To implement: use GraphQL query to request data.
//
// const PRODUCTS_QUERY = gql`
//   query ProductsQuery {
//     products {
//       id
//       name
//       brand
//       type
//       image
//       price
//       size
//       rating
//     }
//   }
// `;

export default class Products extends Component {
  render() {
    return (
      <div className="products-container">
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div>
                <a href={"#" + product.id}>
                  <img src={product.image} alt={product.name}></img>
                  <p>
                    <b>{product.brand}</b>
                  </p>
                  <p>
                    <b>{product.name}</b>
                  </p>
                  <p className="product-type">{product.type}</p>
                  <div>
                    <StarRatings
                      rating={product.rating / 20}
                      starRatedColor="black"
                      numberOfStars={5}
                      starDimension="12px"
                      starSpacing="1px"
                    />
                  </div>
                  <div>
                    <div className="product-price">
                      from € {product.price / 100} / {product.size}{" "}
                    </div>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
