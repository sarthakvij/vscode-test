import {person} from "./lib";

console.log(`My name is ${person.name}`);

async function getPosts(){
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = res.json();
return data;
}

getPosts().then(posts => console.log(posts));