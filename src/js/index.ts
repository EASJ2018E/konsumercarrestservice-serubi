import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

// http://rest-pele-easj-dk.azurewebsites.net/api/Cars

interface ICar {
    vendor:string;
    model: string;
    price:number;
}

let uri: string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars";

let divElement:HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let buttonElement:HTMLButtonElement = <HTMLButtonElement>document.getElementById('getAllButton');
buttonElement.addEventListener('click', showAllCars);

let buttonAdd:HTMLButtonElement = <HTMLButtonElement>document.getElementById('addButton');
buttonAdd.addEventListener('click', addCar);

function showAllCars():void {
    axios.get<ICar[]>(uri)
    .then(function(response:AxiosResponse<ICar[]>):void {
        let result:string = "<ol>";
        response.data.forEach((car:ICar) => {

            if(car)
                result += "<li>" + car.vendor + " " + car.model + " - " + car.price.toString() + ",-" + "</li>";
            else
                result += "<li style='color:red;'>NULL element</li>";
        });
        result += "</ol>";

        divElement.innerHTML = result;
    })
    .catch(function (error:AxiosError):void {
        if(error.response) {
            divElement.innerHTML = error.message;
        }
    })
}

function addCar():void {
    let addVendorElement:HTMLInputElement = <HTMLInputElement>document.getElementById('addVendor');
    let addModelElement:HTMLInputElement = <HTMLInputElement>document.getElementById('addModel');
    let addPriceElement:HTMLInputElement = <HTMLInputElement>document.getElementById('addPrice');

    let myVendor:string = addVendorElement.value;
    let myModel:string = addModelElement.value;
    let myPrice:number = +addPriceElement.value;

    axios.post<ICar>(uri, {model:myModel, vendor:myVendor, price:myPrice})
    .then((response:AxiosResponse) => {console.log("response " + response.status + " " +  response.statusText)})
    .catch(function (error: AxiosError): void {
        if (error.response) {
            console.log(error.message);
        }
    })
}