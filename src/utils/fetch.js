const axios = require('axios');

// const apiUrl  = `https://randomuser.me/api/`;

// function retreiveEmployees() {

//     //runs a fetch request to get initial data
//     fetch(`https://randomuser.me/api/`)
//         .then((data) => {
//             console.log(data); 
//             data.json()
//         })
// }

// module.exports = retreiveEmployees;


export default {

    retreiveEmployees: function () {
        return axios.get(`https://randomuser.me/api/?format=json`)
            // .then((data) => {
            //     console.log(data.json());
                // data.json()
            // })

    }

}