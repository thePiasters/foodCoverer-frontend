import TagsKey from "components/MainPage/TagsKey/TagsKey";
import BackgroundImagePage from "components/MainPage/BackgroundImage/BgImage";

import NutriScoreInfo from "components/MainPage/NutriScoreInfo/NutriScoreInfo";
import BrowseButtonsComponent from "components/MainPage/BrowseButtonComponent/BrowseButtonsComponent";
import CategoriesSlider from "components/MainPage/CategoriesSlider/CategoriesSlider";
import Footer from "components/MainPage/Footer/Footer";

import "./MainPage.scss";

function MainPage(props) {
  const { tags, categories } = props;

  return (
    <div className="main-container">
      <BackgroundImagePage />
      <CategoriesSlider categories={categories} />
      <BrowseButtonsComponent />
      <TagsKey tags={tags} />
      <NutriScoreInfo />
      <Footer
        isLoggedIn={props.isLoggedIn}
        onSuccess={props.onLoginSuccess}
        onFailure={props.onLoginFailure}
        onSignoutSuccess={props.onSignoutSuccess}
      />
    </div>
  );
}
export default MainPage;
