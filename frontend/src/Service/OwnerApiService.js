import axios from "axios";

axios.defaults.baseURL = "http://13.234.204.125:8080"; //"https://immense-retreat-08081.herokuapp.com";

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

class OwnerApiService {
  addManager(manager) {
    return axios.post("/owner/add-manager", manager, header);
  }
}

export default new OwnerApiService();
