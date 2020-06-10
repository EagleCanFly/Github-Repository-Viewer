import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com'
})

export const ListAPI = {
    getList() {
        return  instance.get('/search/repositories?q=eagle&page=1&per_page=10');
    }
}
