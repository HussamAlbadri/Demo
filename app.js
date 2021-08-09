'use strict'

let hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

let conatiner = document.getElementById('container');


let Seattle = {
    place: 'Seatlle',
    miniumCus: '23',
    maximumCus: '65',
    averageSale: '6.3',
    averageCusPerHour: [],
    averageCookiesEachHour: [],
    total: 0,


    salmonCookies: function(miniumCus, maximumCus) {


        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.miniumCus);
            let max = Math.floor(this.maximumCus);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.averageCusPerHour.push(randCust);
        }
    },



    getRandom: function() {
        for (let i = 0; i < hours.length; i++) {
            this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
                this.averageSale);
            this.total += this.averageCookiesEachHour[i];
        }

    },

    render: function() {
        console.log('hello');
        let h2El = document.createElement('h2');
        h2El.textContent = this.place;
        conatiner.appendChild(h2El);
        let ulEl = document.createElement('ul');
        conatiner.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `Total: ${this.total}`
    },
}
Seattle.salmonCookies(12, 34);
Seattle.getRandom();
Seattle.render();

let Paris = {
    place: 'Paris',
    miniumCus: '20',
    maximumCus: '38',
    averageSale: '2.3',
    averageCusPerHour: [],
    averageCookiesEachHour: [],
    total: 0,


    salmonCookies: function(miniumCus, maximumCus) {


        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.miniumCus);
            let max = Math.floor(this.maximumCus);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.averageCusPerHour.push(randCust);
        }
    },



    getRandom: function() {
        for (let i = 0; i < hours.length; i++) {
            this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
                this.averageSale);
            this.total += this.averageCookiesEachHour[i];
        }

    },

    render: function() {
        let h2El = document.createElement('h2');
        h2El.textContent = this.place;
        conatiner.appendChild(h2El);
        let ulEl = document.createElement('ul');
        conatiner.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `Total: ${this.total}`
    },
}
Paris.salmonCookies(12, 34);
Paris.getRandom();
Paris.render();

let Tokyo = {
    place: 'Tokyo',
    miniumCus: '3',
    maximumCus: '24',
    averageSale: '1.2',
    averageCusPerHour: [],
    averageCookiesEachHour: [],
    total: 0,


    salmonCookies: function(miniumCus, maximumCus) {


        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.miniumCus);
            let max = Math.floor(this.maximumCus);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.averageCusPerHour.push(randCust);
        }
    },



    getRandom: function() {
        for (let i = 0; i < hours.length; i++) {
            this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
                this.averageSale);
            this.total += this.averageCookiesEachHour[i];
        }

    },

    render: function() {
        let h2El = document.createElement('h2');
        h2El.textContent = this.place;
        conatiner.appendChild(h2El);
        let ulEl = document.createElement('ul');
        conatiner.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `Total: ${this.total}`
    },
}
Tokyo.salmonCookies(12, 34);
Tokyo.getRandom();
Tokyo.render();

let Dubai = {
    place: 'Dubai',
    miniumCus: '11',
    maximumCus: '38',
    averageSale: '3.7',
    averageCusPerHour: [],
    averageCookiesEachHour: [],
    total: 0,


    salmonCookies: function(miniumCus, maximumCus) {


        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.miniumCus);
            let max = Math.floor(this.maximumCus);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.averageCusPerHour.push(randCust);
        }
    },



    getRandom: function() {
        for (let i = 0; i < hours.length; i++) {
            this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
                this.averageSale);
            this.total += this.averageCookiesEachHour[i];
        }

    },

    render: function() {
        let h2El = document.createElement('h2');
        h2El.textContent = this.place;
        conatiner.appendChild(h2El);
        let ulEl = document.createElement('ul');
        conatiner.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `Total: ${this.total}`
    },
}
Dubai.salmonCookies(12, 34);
Dubai.getRandom();
Dubai.render();

let Lima = {
    place: 'Lima',
    miniumCus: '2',
    maximumCus: '16',
    averageSale: '4.6',
    averageCusPerHour: [],
    averageCookiesEachHour: [],
    total: 0,


    salmonCookies: function(miniumCus, maximumCus) {


        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.miniumCus);
            let max = Math.floor(this.maximumCus);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.averageCusPerHour.push(randCust);
        }
    },



    getRandom: function() {
        for (let i = 0; i < hours.length; i++) {
            this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
                this.averageSale);
            this.total += this.averageCookiesEachHour[i];
        }

    },

    render: function() {
        let h2El = document.createElement('h2');
        h2El.textContent = this.place;
        conatiner.appendChild(h2El);
        let ulEl = document.createElement('ul');
        conatiner.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `Total: ${this.total}`
    },
}
Lima.salmonCookies(12, 34);
Lima.getRandom();
Lima.render();