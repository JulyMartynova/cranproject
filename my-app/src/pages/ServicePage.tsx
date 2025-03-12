import React from "react";
import serv from "./sev1.jpg"

const ServicePage: React.FC = () => {
    interface Service {
        id: number;
        name: string;
        description: string;
    };
    const services : Service[] = [{
        id: 1, name: "AR-Экскурсии", description: "Добавляем интерактивные AR-элементы для улучшения вашего экскурсионного опыта.",
    },
    {
        id: 2, name: "AR-квесты", description: "Создаём полное погружение в игровой формат, обеспечивая уникальное взаимодействие и интересные сюжетные линии.",
    },
    {
        id: 3, name: "Туризм с AR", description: "Предлагаем новые возможности для путешественников, раскрывая историю и культуру мест через интерактивный формат.",
    },

]
    return (
        <div className = "wrapper">
            <div className = "service-container">
            {services.map((service => (
                <div className = "service">
                <img src  = {serv} alt = "Service"></img>
                <section>
                    <h1> {service.name}</h1>
                    <p>
                {service.description}
                </p>
                </section>
            
            </div>
            )))}
            </div>
        </div>
    );
};
export default ServicePage;