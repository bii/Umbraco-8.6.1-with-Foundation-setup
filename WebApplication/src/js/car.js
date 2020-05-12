class Car {
    constructor(brand) {
        this.carname = brand;
    }

    get carname() {
        return this._carname;
    }

    set carname(x) {
        this._carname = x;
    }

    present = () => {
        return 'I have a shitty ' + this.carname;
    }
}

export {Car as C};