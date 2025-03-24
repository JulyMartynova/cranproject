import React, {useEffect} from "react";
import serv from "../img/sev1.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Service} from "../api/servicesGetter";

const services : Service[] = [{
    id: 1, name: "AR-Экскурсии", description: "Добавляем интерактивные AR-элементы для улучшения вашего экскурсионного опыта.Нужно чуть больше и больше информации.", img: serv,
},
{
    id: 2, name: "AR-квесты", description: "Создаём полное погружение в игровой формат, обеспечивая уникальное взаимодействие и интересные сюжетные линии.Нужно чуть больше и больше информации.", img: serv,
},
{
    id: 3, name: "Туризм с AR", description: "Предлагаем новые возможности для путешественников, раскрывая историю и культуру мест через интерактивный формат.Нужно чуть больше и больше информации.", img: serv,
},

]

const ServicePage: React.FC = () => {    
    useEffect(() => {
            document.title = `Наши услуги`; // Устанавливаем заголовок страницы
        }, []);
    return (
        <div>
            <Header ></Header>
        <div className = "wrapper">
            {/* <h2>Что мы делаем?</h2> */}
            <div className = "service-container">
            {services.map((service => (
                <div className = "service" key = {service.id}>
                <img src  = {serv} alt = "Service" loading="lazy"></img>
                <div className="service-description">
                    <h3> {service.name}</h3>
                    <p>
                {service.description}
                </p>
                </div>
            
            </div>
            )))}
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};
export default ServicePage;