import { Products } from "./src/models/Products";

const productsStore = new Products()
console.log(productsStore.allStorages);
console.log(productsStore.SortProductsAB);
// console.log(productsStore.allStorages.find(item => item.id === 1).products.sort((a,b) => a.price - b.price));
// console.log(productsStore.allStorages.map(item => item.products.sort((a,b) => a.price-b.price)));

productsStore.addProduct(1,  {product_name: "Планшет",
    seller_name: "Мобильные Устройства Инк.",
    quantity: 100,
    price: 30000,
    delivery_id: 111,
    id: 1});

productsStore.addProduct(2,  {product_name: "Планшет",
    seller_name: "Электроника ООО",
    quantity: 100,
    price: 25000,
    delivery_id: 112,
    id: 2});

console.log(productsStore.allStorages);
console.log(productsStore.SortProductsBA);