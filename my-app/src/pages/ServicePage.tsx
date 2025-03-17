import React, {useState, useEffect} from "react";
import serv from "./sev1.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Service, fetchServices} from "../api/servicesGetter";
// import {useLoadErrorHandler} from "../components/useLoadingWithError"

const ServicePage: React.FC = () => {
    // const {loading, error, executeErrorHandling} = useLoadErrorHandler();
    
    //   useEffect(() => {
    //     const loadServices = async () => {
    //         try {
    //             const services = await executeWithErrorHandling(fetchServices);
    //             console.log('Загруженные сервисы:', services);
    //         } catch (err) {
    //             console.error('Ошибка:', err);
    //         }
    //     };

    //     loadServices();
    // }, [executeWithErrorHandling]);
    
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
        <div>
            <Header ></Header>
        <div className = "wrapper">
            
            <div className = "service-container">
            {services.map((service => (
                <div className = "service" key = {service.id}>
                <img src  = {serv} alt = "Service"></img>
                <section>
                    <h2> {service.name}</h2>
                    <p>
                {service.description}
                </p>
                </section>
            
            </div>
            )))}
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};
export default ServicePage;