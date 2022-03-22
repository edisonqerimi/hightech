import { users } from "./users.js";

if (sessionStorage.getItem('users') === null) {
    sessionStorage.setItem('users', JSON.stringify(users));
}
