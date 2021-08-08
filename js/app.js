'use strict'

let Hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']

let conatiner = document.getElementById('Salmon');


let Seattle = {
    Place: 'Seatlle',
    miniumCus: '23',
    maximumCus: '65',
    AverageSale: '6.3',
    averageCusPerHour: [],
    averageCookiesEachHour: [],
    total: 0,


    salmonCookies: function() {
        for (let i = 0; i < Hours.length; i++) {
            this.averageCookiesEachHour.push(this.averageCusPerHour[i] * this.average);
            this.total += this.averageCookiesEachHour[i];
        }
    },

    getRandom: function(min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        for (let i = 0; i < Hours.length; i++) {
            this.averageCookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },
    render: function() {​​​​​

        let ulEl = document.createElement('ul');
        conatiner.appendChild(ulEl);

        for (let i = 0; i < Hours.length; i++) {​​​​​
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `${​​​​​Hours[i]}​​​​​: ${​​​​​this.averageCookiesEachHour[i]}`​​​​​;
        }​​​​​
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `total: ${​​​​​this.total}​​​​​`;
    }​​​​​
}​​​​​

//     render: function() {
//         let Seattle = document.getElementById('Seattle');
//         // let articleEl = document.createElement('article');
//         // articleEl.appendChild(articleEl);
//         // let h2El = document.createElement('h2');
//         // Seattle.appendChild(h2El);
//         // h2El.textContent = this.Place;
//         let ulEl = document.createElement('ul');
//         Seattle.appendChild('ulEl');
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild('liEl')
//             liEl.textContent = `${Hours[i]} is ${this.averageCookiesEachHour[i]}`;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`
//     }
// }
Seattle.getRandom(12, 34);
Seattle.salmonCookies();
Seattle.render();

// let seattle = {

//     location: 'Seattle',
//     min: 1,
//     max: 65,
//     average: 6.3,
//     avgOfCookies: [],
//     totel: 0,

//     randomNumber: function(min, max) {

//         this.min = Math.ceil(min);
//         this.max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

//     },
//     calculatAvgOfCookies: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgOfCookies.push(this.randomNumber(this.min, this.max) * this.average);
//             this.totel += this.avgOfCookies[i];
//         }
//         console.log(this.totel);
//     },
//     render: function() {
//         console.log(this.avgOfCookies);
//         let articleEl = document.createElement('article');
//         Seattle.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = 'Sales Data';
//         let pEl = document.createElement('p');
//         articleEl.appendChild(pEl);
//         pEl.textContent = `Location ${this.location}`;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `Number of hours is ${hours[i]} and the average of cookies is : ${this.avgOfCookies[i]}  cookies`;
//         }
//         let li1El = document.createElement('li');
//         ulEl.appendChild(li1El);
//     }
// }