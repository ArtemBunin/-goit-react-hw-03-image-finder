import axios from "axios";

axios.defaults.baseURL='https://pixabay.com/api/';
const searchParams = new URLSearchParams({
    key:'29557508-0ee7329b42c60c951b2e7a132',
    image_type:'photo',
    orientation:'horizontal',
    per_page:12,
})

export async function getImage(query, page){

        const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
      
        return response.data
}