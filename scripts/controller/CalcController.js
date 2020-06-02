class CalcController {

    constructor() {
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display');
        this._dateCalcEl = document.querySelector('#date');
        this._timeCalcEl = document.querySelector('#hour');
        this._currentDate;

        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {

        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000)
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach(btn => {
            this.addEventListenerAll(btn, 'click drag', () => {
                console.log(btn.className.baseVal.replace('btn-', ''))
            })

            this.addEventListenerAll(btn, 'mouseover mouseenter mousedown', () => btn.style.cursor = 'pointer')
        })
    }

    get displayTime() {
        return this._timeCalcEl.innerHTML;
    }


    set displayTime(value) {
        return this._timeCalcEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateCalcEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateCalcEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}