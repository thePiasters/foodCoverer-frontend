var t = {
  Common: {
    search: "Search...",
    logout: "Log out",
    login: "Log in",
    submit: "Submit",
  },
  Main: { name: "Food Coverer", slogan: "We got your food covered" },

  NavBar: {
    admin: "Admin panel",
    additives: "Additives",
    catrgories: "Categories",
    scoring: "Scoring system",
    tagsDescription: "Tags description",
    user: "User panel",
  },

  SideBar: {
    close: "Close side bar",
    viewAll: "View all",
  },

  NutriScore: {
    title: "NUTRI-SCORE",
    description:
      "Nutri-Score is a front-of-pack nutritional label which converts the nutritional value of food and beverages into a simple overall score. It is based on a scale of 5 colours and letters:",
    gradeA: "A is green ",
    gradeADesc: "to represent the best nutritional quality",
    gradeE: "E is dark orange ",
    gradeEDesc: " to show it's the lowest",
    gradeDetermination:
      "Grade is determined by subtracting the total positive points from the total negative points. And the lower the score, the better the letter grade.",
    linkLabel: "Find out more",
    link: "https://get.apicbase.com/nutri-score-science-based-nutritional-value-labelling-system/",
  },
  Footer: {
    title: " Create your own products ",
    powerdBy: "Site powered by:",
    login: "Sign in with google",
  },
  CategoryCard: {
    browse: "Browse",
  },
  BrowseButtonsComponent: {
    findProducts: "Find products",
    findAdditives: "Browse additives",
  },
  Tags: {
    title: "Tags description",
  },
  Additives: {
    title: "Food Additives",
    Fiters: {
      positive: "With no or positive impact on health",
      negative: "With negative impact on health",
      buttonPositive: "Show additives with positive or impact",
      buttonNegative: "Show additives with negative impact",
    },
    funtion: "Function:",
    desription: "Description",
    Tooltip: {
      viewKey: "View description key",
      descriptionKey: "Description of the markings",
      eu: "Food additives approved for the EU",
      noData: "There is no information about safety of intake",
      safe: "Additives with positive or no impact on health",
      medium: "Additives which may cause allergic reactions in certain cases",
      harmfull: "Additives causing harmful effects",
    },
  },
  Products: {
    product: "Product ",
    title: "Products",
    add: "Add product",
    viewDetails: "View details",
    deleted: " have been deleted successfuly",
    details: "Product Details",
    noBrand: "no brand specified",
    noAllergens: "There are no allergens present",
    allergensTitle: "Allergens: ",
    additivesTitle: "Additives:",
    ingredienst: "Ingredients:",
    ingredientsMissing: "No data",
    createdBy: "Created by: ",
    substitutes: "Healthier substitutes",
    NutritionData: {
      unit_g: "g/",
      unit_ml: "ml",
      quantity: "100g/100ml",
      title: "Nutrition values",
      missing: "Nutrition data is missing",
      proteins: "Proteins",
      salt: "Salt",
      fiber: "Fiber",
      sugars: "Sugars",
      carbs: "Carbohydrates",
      saturated: "Saturated Fat",
      fat: "Fat",
      energy: "Energy [kcal]",
    },
  },
  Error: {
    general: "There is some invalid data in your form",
    missingBarcode: "Please provide valid barcode\n",
    invalidBarcodeLength: "Barcode cannot be longer than 13\n",
    negativeBarcode: "Invalid barcode\n",
    missingName: "Please provide name\n",
    missingSubcategory:
      "Please select subcategory, if you cannot find category that suits you please select 'other'\n",
    invalidQuantity: "Please correct quantity value\n",
    invalidName:
      "Product name cannot be longer than 50 characters and cannot br empty\n",
    invalidUrl: "Provided link is not valid url\n",
    invlaidNutrition: "Please provide corret nutrition values\n",
  },
  Panel: {
    browseBrands: "Browse Brands",
    manageBrands: "Manage Brands",
    manageUsers: "Manage Users",
    showCreated: "Show created products",
    manageProducts: "Manage Products",
    elevate: "Elevate Privledges",
    disable: "Disable Account",
    enable: "Enable Account",
    Brand: {
      enterName: "Enter brand name",
      addBrand: "Add new brand",
      errorMsg_01: "Brand you've entered already exsitsts or is invalid",
      errorMsg_02: "Brand you've entered already exsitsts or is invalid",
      verified: "Brand verified",
      verify: "Verify brand",
    },
  },
};
module.exports = {
  t: t,
};
