// module.exports = {
//   "Test 1": async function (browser) {
//     function toLowerCaseReplaceSpaces(str) {
//       return str.split(" ").join("_").toLowerCase();
//     }

//     function verify(categoryName) {
//       console.log(categoryName);
//       const selector = `#${toLowerCaseReplaceSpaces(categoryName)}`;
//       browser.elements(
//         "css selector",
//         `#${toLowerCaseReplaceSpaces(
//           categoryName
//         )} > div.react-slidedown.pro-inner-list-item > div > ul > li`,
//         function (result) {
//           for (var i = 0; i < result.value.length; i++) {
//             const elementId = result.value[i].ELEMENT;
//             browser.elementIdClick(elementId);
//             browser.elementIdText(elementId, function (result) {
//               const elemInnerTest = toLowerCaseReplaceSpaces(result.value);

//               browser.assert.urlContains(
//                 toLowerCaseReplaceSpaces(categoryName)
//               );
//               if (elemInnerTest != "view_all") {
//                 browser.assert.urlContains(elemInnerTest);
//               }
//             });
//           }
//         }
//       );
//     }

//     const productsPageLink = "#products-page";
//     const productLinkUrl = "/products";
//     const toggleButton = "button.navbar-toggler.collapsed";
//     const diariesNavSideOption = "#diaries";

//     browser
//       .url(process.env.REACT_APP_FRONT_BASE_URL)
//       .click(toggleButton)
//       .click(productsPageLink)
//       .assert.urlContains(productLinkUrl);

//     let category_array = [];
//     const result = await browser.elements("css selector", "ul > li");
//     for (var i = 0; i < result.value.length; i++) {
//       const elementId = result.value[i].ELEMENT;
//       const elementIdAttribute = await browser.elementIdAttribute(
//         elementId,
//         "id"
//       );
//       if (elementIdAttribute.value != "") {
//         console.log(elementIdAttribute);
//         category_array.push(elementIdAttribute.value);
//       }
//     }

//     for (let i = 0; i < category_array.length; i++) {
//       const selector = `#${toLowerCaseReplaceSpaces(category_array[i])}`;
//       const result = await browser.elements(
//         "css selector",
//         `#${toLowerCaseReplaceSpaces(
//           category_array[i]
//         )} > div.react-slidedown.pro-inner-list-item > div > ul > li`
//       );

//       it("let me die" + i, function (browser, selector) {
//         browser.click(selector);
//         browser.waitForElementVisible(
//           `#${toLowerCaseReplaceSpaces(
//             category_array[i]
//           )} > div.react-slidedown.pro-inner-list-item > div > ul > li:nth-child(1)`
//         );

//         for (var k = 0; k < result.value.length; k++) {
//           console.log("-------------------------------");
//           console.log(result.value[k]);
//           const elementId = result.value[k].ELEMENT;
//           browser.elementIdClick(elementId);
//         }

//         // console.log(result);
//         browser.click(selector);
//       });

//       console.log("KURWA");
//     }
//     console.log(category_array);

//     // browser.elements("css selector", "ul > li", function (result) {
//     //   for (var i = 0; i < result.value.length; i++) {
//     //     const elementId = result.value[i].ELEMENT;
//     //     browser.elementIdAttribute(elementId, "id", function (result) {
//     //       if (result.value != "") {
//     //         const categoryName = result.value;
//     //         const selector = `#${toLowerCaseReplaceSpaces(categoryName)}`;
//     //         browser.click(selector);
//     //         verify(categoryName);
//     //         browser.click(selector);
//     //         browser.pause(1000);
//     //       }
//     //     });
//     //   }
//     // });
//   },
// };
