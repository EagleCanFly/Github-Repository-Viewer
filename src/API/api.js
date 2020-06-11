import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com'
})

export const ListAPI = {
    getList(page) {
        return  instance.get(`/search/repositories?q={query}&page=${page}&per_page=10&sort=stars`);
    }
}
