import {C} from "./car";

class Model extends C {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }

    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

export {Model as Mod};