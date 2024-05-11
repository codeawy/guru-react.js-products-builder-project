import { faker } from "@faker-js/faker";

// ** Array (15) of Object(Product), each product contains title, description, price
// ** faker.commerce.productName()

const PRODUCT_LENGTH = 15;
export const fakeProductList = Array.from({ length: PRODUCT_LENGTH }, () => ({
  id: faker.string.uuid(),
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
}));
