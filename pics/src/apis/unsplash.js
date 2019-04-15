import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e0548021085e55285dbfb162584b3e5244882a0c8840abd794d18960ec9a1fa7'
    }
});