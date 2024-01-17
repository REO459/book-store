import { username } from "./credentials.js";
import { password } from "./credentials.js";

export const PORT = 5555;

export const mongoDBURL = `mongodb+srv://${username}:${password}@book-store.86tfuas.mongodb.net/books-collection?retryWrites=true&w=majority`