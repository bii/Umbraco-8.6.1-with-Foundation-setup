import "./foundation";
import {Mod} from "./model";
import {C as Ca} from "./car";

let car1 = new Ca('Ford');
let car2 = new Mod('Ford', 'Fiesta')

console.log(car1.carname);
console.log(car2.show());