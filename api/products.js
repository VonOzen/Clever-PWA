let faker = require('faker');

let generateProducts = () => {
  let products = [];

  for (let id = 1; id <= 30; id++) {
    let sku = faker.random.alphaNumeric(8);
    let number = faker.random.number(1000, 2);
    let boolean = number ? true : false;
    let price_collection = [{
        "fr_FR": faker.commerce.price(50, 1500, 2, '€'),
        "en_UK": faker.commerce.price(50, 1500, 2, '£'),
        "en_US": faker.commerce.price(50, 1500, 2, '$'),
        "es_ES": faker.commerce.price(50, 1500, 2, '€'),
    }];
    let metric = "undefined";
    let text = faker.commerce.productName();
    let textarea = faker.lorem.paragraph(5);
    let file = "undefined";
    let image = "http://placehold.it/600x400";
    let date = faker.date.future(1,'02-20-2019');
    let simpleselect = "undefined";
    let multiselect = "undefined";

    products.push({
      "id": id,
      "sku":sku,
      "boolean": boolean,
      "number": number,
      "price_collection": price_collection,
      "metric": metric,
      "text": text,
      "textarea": textarea,
      "file": file,
      "image": image,
      "date": date,
      "simpleselect": simpleselect,
      "multiselect": multiselect
    });
  }

  return { "products": products };
}

// let generateCategories = () => {
//   let categories = [];

//   for (let id = 0; id < array.length; id++) {
//     const element = array[id];
    
//   }
// }

// categories = [{
//   "id": 1,
//   "name": "Informatique",
// },
// {
//   "id": 2,
//   "name": "Informatique",
// }
// ];

module.exports = generateProducts;