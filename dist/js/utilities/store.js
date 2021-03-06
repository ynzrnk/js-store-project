import { getStorageItem, setStorageItem } from "./utilities.js";

let store = getStorageItem("store");

const setupStore = (products) => {
    store = products.map((product) => {
        const {
            id,
            fields: { colors, company, featured, image: img, name, price },
        } = product;
        const image = img[0].thumbnails.large.url;
        return { id, colors, company, featured, image, name, price };
    });
    setStorageItem("store", store);
};

const findProduct = (id) => {
    return store.find((product) => product.id === id);
};

export { store, setupStore, findProduct };
