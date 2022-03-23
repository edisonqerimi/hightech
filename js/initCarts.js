import { carts } from "./carts.js";

if (sessionStorage.getItem('carts') == null) {
    sessionStorage.setItem('carts', JSON.stringify(carts));
}