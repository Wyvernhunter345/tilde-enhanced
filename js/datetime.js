class datetime {
    constructor(options) {
        this._el = $.el('.datetime');
        this._el.addEventListener('click', options.toggleHelp);
        this._start();

    }

    _setDate() {
        const currentDate = new Date();
        let _cDay = currentDate.getDate();
        let _cMonth = currentDate.getMonth() + 1;
        let _cYear = currentDate.getFullYear();
        document.getElementById('datetime').innerHTML = `<b> ${_cDay}/${_cMonth}/${_cYear} </b>`;
            //`${day}${month}${year}`;

    }

    _start() {
        this._setDate();
        setInterval(this._setDate, 1000);
    }
}


