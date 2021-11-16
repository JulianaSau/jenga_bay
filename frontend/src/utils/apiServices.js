import axios from "axios"

const baseURL = 'http://localhost:8000';// base url for all endpoints

const apiConfig = {
    baseURL,
    timeout: 30000000,
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  };
  
const api = axios.create({ ...apiConfig });

class APIServices {
   // @desc End Point Example
  async getUsers(data) {
    return api.post("/some-endpoint", data);
  }

  //getting all products
  async getProducts(){
    return api.get(`/items`);
  }

  //getting details of a specific product
  async getProductDetails(item_id){
    return api.get(`/items/${item_id}`);
  }

  //getting items in a specific category
  async getItemsInSpecificCategory(category_name){
    return api.get(`/items/category/${category_name}`)
  }

  //getting details of a specific seller
  async getSellerDetails(seller_id){
    return api.get(`/sellers/${seller_id}`);
  }

  //getting profile of a specific seller
  async getSellerProfile(seller_id){
    return api.get(`/sellers/${seller_id}/profile`);
  }

  //Getting all items belonging to a specific seller
  async getSellerItems(seller_id){
    return api.get(`/sellers/${seller_id}/items`)
  }
}

const instance = new APIServices();//an instance of axios that can be used globally

export default instance;
