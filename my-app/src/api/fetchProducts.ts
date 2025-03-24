import axios from 'axios'

export interface Product {
    id: number;
    name: string;
    description: string;
    img: string;
}

export const fetchProducts = async(): Promise <Product[]> => {
    try {
        const response = await axios.get<{products: Product[]}>("http://localhost:8080/products");
        return response.data.products;
    }catch (error) {
        console.error("Ошибка при загрузке продуктов", error);
        throw error;
    }
}