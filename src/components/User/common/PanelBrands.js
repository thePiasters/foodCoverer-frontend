import BrandsList from "./BrandsList/BrandsList";

import api from "api/foodDbApi";
import { useState, useEffect } from "react";
import { filterBrandsCollecionByTerm } from "utils/filters";
import { isBrandValid } from "utils/brandValidator";

const PanelBrands = (props) => {
  const [brandsFiltered, setBrandsFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { brands, userRole } = props;

  useEffect(() => {
    setBrandsFiltered(brands);
  }, [props]);

  function deleteBrand(brand) {
    api.delete("/brands/delete", { data: brand }).then(function (response) {
      props.reloadBrands();
    });
  }
  function verifyBrand(brand) {
    brand.verified = true;
    api.patch("/brands/verify", brand).then(function (response) {
      props.reloadBrands();
    });
  }

  function submitAdd(e, callback) {
    if (e.keyCode == 13) {
      const newBrand = e.target.value;
      if (!isBrandValid(newBrand)) {
        callback(true);
        return;
      }

      callback(false);
      api
        .post("/brands/add", { name: newBrand })
        .then(function (response) {
          props.reloadBrands();
        })
        .catch(function (error) {
          if (error.response) {
            callback(true);
          }
        });
    }
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    const filteredBrands = filterBrandsCollecionByTerm(brands, searchTerm);
    setBrandsFiltered(filteredBrands);
  }

  return (
    <BrandsList
      brands={brandsFiltered}
      userRole={userRole}
      deleteBrand={deleteBrand}
      verifyBrand={verifyBrand}
      handleSearch={handleSearch}
      submitAdd={submitAdd}
    />
  );
};
export default PanelBrands;
