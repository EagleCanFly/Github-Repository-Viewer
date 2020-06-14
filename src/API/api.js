import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com'
})

export const ListAPI = {
    getList(page,query) {
        return  instance.get(`/search/repositories?q=${query}&page=${page}&per_page=10&sort=stars`);
    },
    getContributorsList(login,repository) {
        return instance.get(`/repos/${login}/${repository}/contributors`)
    },
    getTopTen() {
        return instance.get('search/repositories?q=stars:>=10000&page=1&per_page=10&sort=stars')
    }
}