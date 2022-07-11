import axios from "axios";

//01001000/json/

const api = axios.create({
    //baseURL: "viacep.com.br/ws/"
    //baseURL: "https://ws.apicep.com/cep/"
    baseURL: "https://cep.awesomeapi.com.br/" //json/05424020
})

export default api;