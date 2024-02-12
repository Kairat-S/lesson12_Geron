import { Storage } from "./Storage";
import products from "../data/products.json";

export type TProducts = {
    product_name: string;
    seller_name: string;
    quantity: number;
    price: number;
    delivery_id: number;
    id: number;
};

export class Products extends Storage{
    constructor(){
        super()
        products.forEach(item => {
            this.setProducts(item.id, item)
        })
    }

    get SortProductsAB(){
        return this.allStorages.map(item => {return item.products.sort((a,b) => a.price-b.price)})
    }

    get SortProductsBA(){
        return this.allStorages.map(item => {return item.products.sort((a,b) => b.price-a.price)})
    }

    addProduct(id: number, products: TProducts){
        this.setProducts(id, products)
    }
}