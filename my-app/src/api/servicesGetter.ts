import axios from 'axios';

export interface Service {
    id: number;
    name: string;
    description: string;
    img: string;

};

export const fetchServices = async (): Promise<Service[]> => {
    try {
        const response = await axios.get<{services: Service[]}> ("http://localhost:8080/services");
        return response.data.services;
    } catch (error) {
        console.error("Ошибка при загрузке:", error);
        throw error;
    }
}