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

let buttonElement:HTMLButtonElement = <HTMLButtonElement>document.getElementById('getAllButton');
buttonElement.addEventListener('click', showAllCars);

function showAllCars():void {
    let uri: string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars";

    axios.get<ICar[]>(uri)
    .then(function(response:AxiosResponse<ICar[]>):void {
        let result:string = "<ol>";
        response.data.forEach((car:ICar) => {
            result += "<li>" + car.model + " " + car.vendor + " - " + car.price.toString() + ",-" + "</li>";
        });
        result += "</ol>";
    })
    .catch()
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