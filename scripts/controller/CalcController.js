class CalcController {

    constructor() {
        this._displayCalc = 0;
        this._currentDate;

        this.initialize();
    }

    initialize() {
        let displayCalcEl = document.querySelector('#display');
        let dateCalcEl = document.querySelector('#date');
        let timeCalcEl = document.querySelector('#hour');

        displayCalcEl.innerHTML = '4567';
        dateCalcEl.innerHTML = '01/06/2020';
        timeCalcEl.innerHTML = '00:00';
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this.displayCalc = value;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}