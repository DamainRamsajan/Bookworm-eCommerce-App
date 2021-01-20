import axios from "axios";

//const instance = axios.create ({
  //  baseURL: "https://us-central1-bookworm-ecommerce-app.cloudfunctions.net/api"
    //"http://localhost:5001/bookworm-ecommerce-app/us-central1/api"
//});

const instance = axios.create(
    {
            baseURL: "https://us-central1-bookworm-ecommerce-app.cloudfunctions.net/api",
            withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          }
      })

export default instance;