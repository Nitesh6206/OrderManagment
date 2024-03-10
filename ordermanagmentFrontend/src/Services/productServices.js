import axios from 'axios';

const BASE_URL = 'http://localhost:8081/orders';

class ProductService {
    getAllOrders() {
        return axios.get(BASE_URL);
    }

    updateOrder(orderId, orderData) {
        return axios.put(`${BASE_URL}/${orderId}`, orderData);
    }

    createOrder(orderData) {
        return axios.post(BASE_URL, orderData);
    }

    getOrderById(orderId) {
        return axios.get(`${BASE_URL}/${orderId}`);
    }

    deleteOrder(orderId) {
        return axios.delete(`${BASE_URL}/${orderId}`);
    }
}

export default new ProductService();
