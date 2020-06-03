import axios from 'axios';


  export const getStocks = () => {
      return axios.get(`data.json`);
    };

  export const  buyStocks = (data) => {
    return axios.put(`data.json`, data);
  };

  export const  sellStocks = (data) => {
    return axios.put(`data.json`, data);
  };

  export const  saveData = (data) => {
    return axios.put(`data.json`, data);
  };

   
    // sellStocks: (data) => {
    //   return axios.put(`https://stocks-aab13.firebaseio.com/${data}`);
    // }


// export default [
//         {id: "1", price: 150, company: "Apple"},
//         {id: "2", price: 250, company: "BMW"},
//         {id: "3", price: 180, company: "Amazon"},
//         {id: "4", price: 130, company: "Twitter"},
//       ]

