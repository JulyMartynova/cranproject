import axios from 'axios'

export interface Review {
    id: number;
    text: string;
    mark: number;
    username: string;
    img: string;
};

export const fetchReviews = async(): Promise <Review[]> => {
    try {
        const response = await axios.get<{reviews: Review[]}>("http://localhost:8081/reviews");
        return response.data.reviews;
    }catch (err) {
        console.error("Ошибка загрузки:", err)
        throw err;
    }
}