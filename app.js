'use strict'

let hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
let cookies = [];
let conatiner = document.getElementById('container');

let tableEl = document.createElement('table');
conatiner.appendChild(tableEl);

function salmon(place, miniumCus, maximumCus, averageSale) {
    this.place = place;
    this.miniumCus = miniumCus;
    this.maximumCus = maximumCus;
    this.averageSale = averageSale;
    this.averageCusPerHour = [];
    this.averageCookiesEachHour = [];
    this.total = 0;
    cookies.push(this);
}
salmon.prototype.salmonCookies = function(miniumCus, maximumCus) {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.miniumCus);
            let max = Math.floor(this.maximumCus);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.averageCusPerHour.push(randCust);
        }
    },

    salmon.prototype.getRandom = function() {
        for (let i = 0; i < hours.length; i++) {
            this.averageCookiesEachHour.push(Math.ceil(this.averageCusPerHour[i] *
                this.averageSale));
            this.total += this.averageCookiesEachHour[i];
        }

    },

    salmon.prototype.render = function() {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let tdEl1 = document.createElement('td');
        trEl.appendChild(tdEl1);
        tdEl1.textContent = this.place;
        for (let i = 0; i < hours.length; i++) {
            let tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            tdEl.textContent = this.averageCookiesEachHour[i];
        }
        let tdE2 = document.createElement('td');
        trEl.appendChild(tdE2);
        tdE2.textContent = this.total;
    }

function createTableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let thE2 = document.createElement('th');
    trEl.appendChild(thE2);
    thE2.textContent = ' '
    for (let i = 0; i < hours.length; i++) {
        let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = hours[i];
    }
    let thE3 = document.createElement('th');
    trEl.appendChild(thE3);
    thE3.textContent = 'Daily Location Total';
}
createTableHeader();

function Footer() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = 'Totals';

    let totalOfTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let total = 0;
        for (let j = 0; j < cookies.length; j++) {
            total += cookies[j].averageCookiesEachHour[i];

        }
        totalOfTotal += total;
        let tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2);
        tdEl2.textContent = total;

    }
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = `${ totalOfTotal }`;

}

let Seattle = new salmon('Seattle', '23', '65', '6.3');
Seattle.salmonCookies(12, 34);
Seattle.getRandom();
Seattle.render();
let Tokyo = new salmon('Tokyo', '3', '24', '1.2');
Tokyo.salmonCookies(12, 34);
Tokyo.getRandom();
Tokyo.render();

let Paris = new salmon('Paris', '20', '38', '2.3');
Paris.salmonCookies(12, 34);
Paris.getRandom();
Paris.render();

let Dubai = new salmon('Dubai', '11', '38', '3.7');
Dubai.salmonCookies(12, 34);
Dubai.getRandom();
Dubai.render();

let Lima = new salmon('Lima', '2', '16', '4.6');
Lima.salmonCookies(12, 34);
Lima.getRandom();
Lima.render();

Footer();






// let Seattle = {
//     place: 'Seatlle',
//     miniumCus: '23',
//     maximumCus: '65',
//     averageSale: '6.3',
//     averageCusPerHour: [],
//     averageCookiesEachHour: [],
//     total: 0,


//     salmonCookies: function(miniumCus, maximumCus) {


//         for (let i = 0; i < hours.length; i++) {
//             let min = Math.ceil(this.miniumCus);
//             let max = Math.floor(this.maximumCus);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.averageCusPerHour.push(randCust);
//         }
//     },



//     getRandom: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
//                 this.averageSale);
//             this.total += this.averageCookiesEachHour[i];
//         }

//     },

//     render: function() {
//         console.log('hello');
//         let h2El = document.createElement('h2');
//         h2El.textContent = this.place;
//         conatiner.appendChild(h2El);
//         let ulEl = document.createElement('ul');
//         conatiner.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `Total: ${this.total}`
//     },
// }
// Seattle.salmonCookies(12, 34);
// Seattle.getRandom();
// Seattle.render();

// let Paris = {
//     place: 'Paris',
//     miniumCus: '20',
//     maximumCus: '38',
//     averageSale: '2.3',
//     averageCusPerHour: [],
//     averageCookiesEachHour: [],
//     total: 0,


//     salmonCookies: function(miniumCus, maximumCus) {


//         for (let i = 0; i < hours.length; i++) {
//             let min = Math.ceil(this.miniumCus);
//             let max = Math.floor(this.maximumCus);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.averageCusPerHour.push(randCust);
//         }
//     },



//     getRandom: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
//                 this.averageSale);
//             this.total += this.averageCookiesEachHour[i];
//         }

//     },

//     render: function() {
//         let h2El = document.createElement('h2');
//         h2El.textContent = this.place;
//         conatiner.appendChild(h2El);
//         let ulEl = document.createElement('ul');
//         conatiner.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `Total: ${this.total}`
//     },
// }
// Paris.salmonCookies(12, 34);
// Paris.getRandom();
// Paris.render();

// let Tokyo = {
//     place: 'Tokyo',
//     miniumCus: '3',
//     maximumCus: '24',
//     averageSale: '1.2',
//     averageCusPerHour: [],
//     averageCookiesEachHour: [],
//     total: 0,


//     salmonCookies: function(miniumCus, maximumCus) {


//         for (let i = 0; i < hours.length; i++) {
//             let min = Math.ceil(this.miniumCus);
//             let max = Math.floor(this.maximumCus);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.averageCusPerHour.push(randCust);
//         }
//     },



//     getRandom: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
//                 this.averageSale);
//             this.total += this.averageCookiesEachHour[i];
//         }

//     },

//     render: function() {
//         let h2El = document.createElement('h2');
//         h2El.textContent = this.place;
//         conatiner.appendChild(h2El);
//         let ulEl = document.createElement('ul');
//         conatiner.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `Total: ${this.total}`
//     },
// }
// Tokyo.salmonCookies(12, 34);
// Tokyo.getRandom();
// Tokyo.render();

// let Dubai = {
//     place: 'Dubai',
//     miniumCus: '11',
//     maximumCus: '38',
//     averageSale: '3.7',
//     averageCusPerHour: [],
//     averageCookiesEachHour: [],
//     total: 0,


//     salmonCookies: function(miniumCus, maximumCus) {


//         for (let i = 0; i < hours.length; i++) {
//             let min = Math.ceil(this.miniumCus);
//             let max = Math.floor(this.maximumCus);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.averageCusPerHour.push(randCust);
//         }
//     },



//     getRandom: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
//                 this.averageSale);
//             this.total += this.averageCookiesEachHour[i];
//         }

//     },

//     render: function() {
//         let h2El = document.createElement('h2');
//         h2El.textContent = this.place;
//         conatiner.appendChild(h2El);
//         let ulEl = document.createElement('ul');
//         conatiner.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `Total: ${this.total}`
//     },
// }
// Dubai.salmonCookies(12, 34);
// Dubai.getRandom();
// Dubai.render();

// let Lima = {
//     place: 'Lima',
//     miniumCus: '2',
//     maximumCus: '16',
//     averageSale: '4.6',
//     averageCusPerHour: [],
//     averageCookiesEachHour: [],
//     total: 0,


//     salmonCookies: function(miniumCus, maximumCus) {


//         for (let i = 0; i < hours.length; i++) {
//             let min = Math.ceil(this.miniumCus);
//             let max = Math.floor(this.maximumCus);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.averageCusPerHour.push(randCust);
//         }
//     },



//     getRandom: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.averageCookiesEachHour[i] = Math.ceil(this.averageCusPerHour[i] *
//                 this.averageSale);
//             this.total += this.averageCookiesEachHour[i];
//         }

//     },

//     render: function() {
//         let h2El = document.createElement('h2');
//         h2El.textContent = this.place;
//         conatiner.appendChild(h2El);
//         let ulEl = document.createElement('ul');
//         conatiner.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} : ${this.averageCookiesEachHour[i]}`;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `Total: ${this.total}`
//     },
// }
// Lima.salmonCookies(12, 34);
// Lima.getRandom();
// Lima.render();