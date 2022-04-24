import axios from "axios";

const apiRequests = {
  methods: {
    getItems(apiUrl, params, destination) {
      axios.get(apiUrl, { params }).then((response) => {
        response.data.forEach((item) => {
          destination.push(item);
        });
      });
    },
  },
};

export default apiRequests;
