class datetime {
    constructor(options) {
        this._el = $.el('.datetime');
        this._el.addEventListener('click', options.toggleHelp);
        this._start();
    }

    _setDate() {
        // Get current date, month, and year
        const currentDate = new Date();
        let _cDay = (currentDate.getDate()).toString();
        let _cMonth = currentDate.getMonth() + 1;
        let _cYear = currentDate.getFullYear();
        let lastDigit = _cDay.charAt(_cDay.length - 1);

        // Determine whether date & time cookie is enabled and if so, adjust date format accordingly 
        if ((localStorage.getItem('dateTimeCookie')).toString() == 'false') {

            // DD/MM/YYYY
            document.getElementById('datetime').innerHTML = `<b> ${_cDay}/${_cMonth}/${_cYear} </b>`;
        }
        else {
            /** Convert numbers to months
             * I know there's likely an easier way to do this but who cares */

            switch (_cMonth) {
                case 1:
                    _cMonth = 'January';
                    break;
                case 2:
                    _cMonth = 'February';
                    break;
                case 3:
                    _cMonth = 'March';
                    break;
                case 4:
                    _cMonth = 'April';
                    break;
                case 5:
                    _cMonth = 'May';
                    break;
                case 6:
                    _cMonth = 'June';
                    break;
                case 7:
                    _cMonth = 'July';
                    break;
                case 8:
                    _cMonth = 'August';
                    break;
                case 9:
                    _cMonth = 'September';
                    break;
                case 10:
                    _cMonth = 'October';
                    break;
                case 11:
                    _cMonth = 'November';
                    break;
                case 12:
                    _cMonth = 'December';
                    break;
                default:
                    _cMonth = 'Undefined';
                    break;
            }

            /** Logic to determine what suffix to use at the end of the date
             * Again, it's really convoluted, but this is the best I could think of 
             * 
             * DD{suffix} of MM YYYY*/
            if (_cDay.length == 0) {
                if (lastDigit == 1) {
                    document.getElementById('datetime').innerHTML = `<b>${_cDay}st of ${_cMonth} ${_cYear}</b>`;
                }
                else if (lastDigit == 2) {
                    document.getElementById('datetime').innerHTML = `<b>${_cDay}nd of ${_cMonth} ${_cYear}</b>`;
                }
                else if (lastDigit == 3) {
                    document.getElementById('datetime').innerHTML = `<b>${_cDay}rd of ${_cMonth} ${_cYear}</b>`;
                }
                else {
                    document.getElementById('datetime').innerHTML = `<b>${_cDay}th of ${_cMonth} ${_cYear}</b>`;
                }
            }
            else if (_cDay == 11) {
                document.getElementById('datetime').innerHTML = `<b>${_cDay}nth of ${_cMonth} ${_cYear}</b>`;
            }
            else if (_cDay == 12) {
                document.getElementById('datetime').innerHTML = `<b>${_cDay}th of ${_cMonth} ${_cYear}</b>`;
            }
            else if (_cDay == 21) {
                document.getElementById('datetime').innerHTML = `<b>${_cDay}st of ${_cMonth} ${_cYear}</b>`;
            }
            else if (_cDay == 23) {
                document.getElementById('datetime').innerHTML = `<b>${_cDay}rd of ${_cMonth} ${_cYear}</b>`;
            }
            else if (_cDay == 31) {
                document.getElementById('datetime').innerHTML = `<b>${_cDay}st of ${_cMonth} ${_cYear}</b>`;
            }
            else {
                document.getElementById('datetime').innerHTML = `<b>${_cDay}th of ${_cMonth} ${_cYear}</b>`;
            }
        }   
    }

    _start() {
        // Run set date function upon startup
        this._setDate();

        // and run every second
        setInterval(this._setDate, 1000);
    }
}