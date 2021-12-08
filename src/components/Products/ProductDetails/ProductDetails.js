import React from "react";
import api from "api/foodDbApi";

import NutriScoreImage from "./NutriScoreImage/NutriScoreImage";

import { Container, Row, Image, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ProductsBreadcrumbs from "components/Products/common/ProductsBreadcrumbs";

import EditButton from "components/Products/common/EditButton";
import DeleteButton from "components/common/DeleteButton";

import { isAdamin } from "utils/login";

import { getProductPicturePath } from "utils/image";
import NutriDataTable from "./NutriDataTable/NutriDataTable";
import VerifiedInfo from "./VerifiedInfo/VerifiedInfo";
import Substitutes from "./Substitutes/Substitutes";
import ProductTags from "./ProductTags/ProductTags";
import ProdcutAdditives from "./ProductAdditives/ProductAdditives";
import ProductAllergens from "./ProductAllergens/ProductAllergens";
import ProductIgredients from "./ProductIngredients/ProductIngredients";

import { t } from "dictionaries/en";

import "./ProductDetails.scss";

class ProductDetails extends React.Component {
  async getSubstitutes(subcategory, grade) {
    const response = await api.post(
      `products/substitutes/grade=${grade}`,
      subcategory
    );
    return response.data;
  }

  getProductById(id) {
    const response = api.get(`products/${id}`);
    return response.data;
  }

  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.verify = this.verify.bind(this);

    const { userRole } = props;

    this.state = {
      userRole,
    };
  }
  componentDidMount() {
    this.getProductById(this.props.match.params.id).then((data) => {
      this.setState({
        product: data,
      });
      this.setSubstitutes();
    });
  }

  setSubstitutes() {
    this.getSubstitutes(
      this.state.product.subcategory,
      this.state.product.grade
    ).then((data) => {
      this.setState({
        substitutes: data,
      });
    });
  }
  async getProductById(id) {
    const response = await api.get(`/products/${id.toString()}`);
    return response.data;
  }

  deleteProduct = (product) => {
    api
      .delete("/products/delete", { data: product })
      .then(this.props.reloadProducts());
    window.location.replace("/products");
    alert(t.Products.title + product.productName + t.Products.deleted);
  };

  verify(product) {
    this.setState({
      product: product,
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t.Products.details}</title>
        </Helmet>
        {this.state.product && (
          <Container>
            <ProductsBreadcrumbs
              currentCategory={this.state.product.subcategory.category}
              currentSubcategory={this.state.product.subcategory}
              productName={this.state.product.productName}
            ></ProductsBreadcrumbs>

            <Row className="product-details-main">
              <Row>
                <Col md={{ span: 4, offset: 5 }}>
                  <h4>{this.state.product.productName}</h4>
                  <p id="product-details-brand">
                    {this.state.product.brand
                      ? this.state.product.brand.name
                      : t.Products.noBrand}
                  </p>
                </Col>
                <Col md={{ span: 1, offset: 1 }}>
                  {isAdamin(this.state.userRole) && (
                    <>
                      <EditButton
                        product={this.state.product}
                        color={"#b0a7a8"}
                      />
                      <DeleteButton
                        deleteMethod={this.deleteProduct}
                        color={"#b0a7a8"}
                        elem={this.state.product}
                      />
                    </>
                  )}
                </Col>
              </Row>

              <Col sm={3} className="product-details-img-wrapper">
                <Image src={getProductPicturePath(this.state.product.image)} />
              </Col>
              <Col sm={1}></Col>
              <Col sm={6} className="pdt-3p">
                <NutriDataTable product={this.state.product} />
                <VerifiedInfo
                  role={this.state.userRole}
                  product={this.state.product}
                  verified={this.state.verified}
                  callback={this.verify}
                />

                <ProductIgredients
                  ingredients={this.state.product.ingredients}
                />

                <ProductAllergens allergens={this.state.product.allergens} />
                <Row>
                  <ProdcutAdditives additives={this.state.product.additives} />
                  <NutriScoreImage grade={this.state.product.grade} />
                </Row>
                <Row>
                  <Col md={{ span: 4, offset: 7 }}>
                    <em>
                      {!this.state.product.user ||
                      isAdamin(this.state.product.user.role)
                        ? t.Products.createdBy + t.Main.name
                        : t.Products.createdBy + this.state.product.user.name}
                    </em>
                  </Col>
                </Row>
              </Col>
            </Row>
            <ProductTags tags={this.state.product.tags} />
            <Substitutes substitutes={this.state.substitutes} />
          </Container>
        )}
      </div>
    );
  }
}
export default ProductDetails;
