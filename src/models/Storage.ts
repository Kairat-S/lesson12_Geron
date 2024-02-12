import storage from "../data/storage.json"
import { TProducts } from "./Products";

type TStorage = {
    city: string;
    name: string;
    address: string;
    id: number;
    products: TProducts[]
};

export class Storage {
    private _data: TStorage[]

    constructor(){
        this._data = storage;
    }

    get allStorages(){
        return this._data;
    }

    private set updateStorage(storage: TStorage){
        this._data = this._data.map(item => {
            if (item.id !== storage.id) return item

            return storage
        })
    }

    protected getStorage(id: number): TStorage{
        return this._data.find(item => item.id === id)
    }

    protected setProducts(id: number, products: TProducts){
        const storage = this.getStorage(id);
        storage.products.push(products);
        this.updateStorage = storage
    }

}