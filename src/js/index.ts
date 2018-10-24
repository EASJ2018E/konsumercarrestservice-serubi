import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

// http://rest-pele-easj-dk.azurewebsites.net/api/Cars

interface ICar {
    model:string;
    vendor:string;
    price:number;
}

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person): string {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user: Person = { firstName: "John", lastName: "Doe" };

// let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
// element.innerHTML = greeter(user);