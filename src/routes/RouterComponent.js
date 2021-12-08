import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import NavBar from "components/common/NavBar/NavBar";
import MainPage from "./MainPage/MainPage";
import ProductsAllWrapper from "./Products/ProductsWrapper";
import ProductForm from "components/Products/ProductForm/ProductForm";

import ProductDetails from "components/Products/ProductDetails/ProductDetails";
import Additives from "./Additives/Additives";

import AdminPanelBrands from "./AdminPanel/AdminPanelBrands";
import AdminPanelUsers from "./AdminPanel/AdminPanelUsers";
import AdminPanelProducts from "./AdminPanel/AdminPanelProducts";
import UserPanelProducts from "./UserPanel/UserPanelProducts";
import UserPanelBrands from "./UserPanel/UserPanelBrands";
import { Redirect } from "react-router-dom";

const RouterComponent = (props) => {
  const {
    products,
    brands,
    categories,
    categoriesWithSub,
    tags,
    additives,
    allergens,
    isLoggedIn,
    userRole,
  } = props;
  const {
    onLoginFailure,
    onLoginSuccess,
    onSignoutSuccess,
    loadBrands,
    loadProducts,
  } = props;
  return (
    <div>
      <Container fluid style={{ padding: "0px" }}>
        <Row>
          <NavBar
            isLoggedIn={isLoggedIn}
            onLoginSuccess={onLoginSuccess}
            onLoginFailure={onLoginFailure}
            onSignoutSuccess={onSignoutSuccess}
            userRole={userRole}
          />
        </Row>
        <Row>
          <Router>
            <Switch>
              <Route path="/" exact>
                <MainPage
                  tags={tags}
                  categories={categories}
                  isLoggedIn={isLoggedIn}
                  onLoginSuccess={onLoginSuccess}
                  onLoginFailure={onLoginFailure}
                  onSignoutSuccess={onSignoutSuccess}
                />
              </Route>
              <Route path="/products" exact>
                <ProductsAllWrapper
                  allProducts={products}
                  isLoggedIn={isLoggedIn}
                  onLoginSuccess={onLoginSuccess}
                  onLoginFailure={onLoginFailure}
                  onSignoutSuccess={onSignoutSuccess}
                  reloadProducts={loadProducts}
                  tags={tags}
                  products={products}
                  categories={categoriesWithSub}
                  additives={additives}
                  allergens={allergens}
                  brands={brands}
                  userRole={userRole}
                />
              </Route>

              <Route
                path="/add/product"
                render={(props) => (
                  <>
                    {isLoggedIn ? (
                      <ProductForm
                        {...props}
                        additives={additives}
                        allergens={allergens}
                        brands={brands}
                        categories={categoriesWithSub}
                        tags={tags}
                        key={window.location.pathname}
                      />
                    ) : (
                      <Redirect to="/" />
                    )}
                  </>
                )}
              ></Route>

              <Route
                path="/edit/product/:productId"
                render={(props) => (
                  <ProductForm
                    {...props}
                    additives={additives}
                    allergens={allergens}
                    brands={brands}
                    categories={categoriesWithSub}
                    tags={tags}
                    reloadProducts={loadProducts}
                    key={window.location.pathname}
                  />
                )}
              ></Route>

              <Route path="/products/:categoryName" exact>
                <ProductsAllWrapper
                  allProducts={products}
                  isLoggedIn={isLoggedIn}
                  onLoginSuccess={onLoginSuccess}
                  onLoginFailure={onLoginFailure}
                  onSignoutSuccess={onSignoutSuccess}
                  reloadProducts={loadProducts}
                  tags={tags}
                  products={products}
                  categories={categoriesWithSub}
                  additives={additives}
                  allergens={allergens}
                  brands={brands}
                  userRole={userRole}
                />
              </Route>
              <Route path="/products/:categoryName/:subcategoryName" exact>
                <ProductsAllWrapper
                  allProducts={products}
                  isLoggedIn={isLoggedIn}
                  onLoginSuccess={onLoginSuccess}
                  onLoginFailure={onLoginFailure}
                  onSignoutSuccess={onSignoutSuccess}
                  reloadProducts={loadProducts}
                  tags={tags}
                  products={products}
                  categories={categoriesWithSub}
                  additives={additives}
                  allergens={allergens}
                  brands={brands}
                  userRole={userRole}
                />
              </Route>

              <Route
                path="/productDetails/:id"
                render={(props) => (
                  <ProductDetails
                    {...props}
                    reloadProducts={loadProducts}
                    key={window.location.pathname}
                    userRole={userRole}
                  />
                )}
              ></Route>
              <Route path="/additives">
                <Additives additives={additives} />
              </Route>
              <Route path="/user" exact>
                <UserPanelProducts userRole={userRole} />
              </Route>
              <Route path="/user/brands" exact>
                <UserPanelBrands userRole={userRole} />
              </Route>
              <Route path="/admin" exact>
                <AdminPanelUsers
                  products={products}
                  reloadProducts={loadProducts}
                  userRole={userRole}
                />
              </Route>
              <Route path="/admin/products" exact>
                <AdminPanelProducts
                  products={products}
                  reloadProducts={loadProducts}
                  userRole={userRole}
                />
              </Route>
              <Route path="/admin/brands" exact>
                <AdminPanelBrands
                  brands={brands}
                  reloadBrands={loadBrands}
                  userRole={userRole}
                />
              </Route>
            </Switch>
          </Router>
        </Row>
      </Container>
    </div>
  );
};
export default RouterComponent;
