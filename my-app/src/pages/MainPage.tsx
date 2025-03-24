import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion, { QuestionAnswer } from '../components/Accordion';
import ReviewsGrid, { Review } from '../components/ReviewsGrid';
import Carousel, { Product } from '../components/Carousel';
import { Service, fetchServices } from "../api/servicesGetter";
import logo from '../img/logo.svg';
import tema from '../img/Артемий.jpg';
import user from '../img/user.jpg';
import bot from '../img/TG_Bot_QR_Code.jpg';
import sev1 from '../img/sev1.jpg';
import sev2 from '../img/sev2.jpg';
import sev3 from '../img/sev3.jpg';

const reviews: Review[] = [
  { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 3, username: "User", img: user },
  { id: 2, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 4, username: "User" },
  { id: 3, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  { id: 4, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 2, username: "User" },
  { id: 5, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  { id: 6, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  { id: 7, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  { id: 8, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
];

const qusetionAnswers: QuestionAnswer[] = [
  { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
  { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
  { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
  { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
];

const customStyles = {
  header: {
    backgroundColor: 'black',
    color: 'white',
  },
  navItem: {
    color: 'white',
  },
};

interface CommandMember {
  id: number;
  name: string;
  surname: string;
  username: string;
  url: string;
}

// const photos: Product[] = [
//   { id: 1, img: sev1, name: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
//   { id: 2, img: sev2, name: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
//   { id: 3, img: sev3, name: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
// ];

// const members: CommandMember[] = [
//   { id: 1, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin" },
//   { id: 2, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin" },
//   { id: 3, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin" },
//   { id: 4, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin" },
//   { id: 5, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin" },
//   { id: 6, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin" },
// ];

const services: Service[] = [
  { id: 1, name: "AR-Экскурсии", description: "Добавляем интерактивные AR-элементы для улучшения вашего экскурсионного опыта.", img: sev1 },
  { id: 2, name: "AR-квесты", description: "Создаём полное погружение в игровой формат, обеспечивая уникальное взаимодействие и интересные сюжетные линии.", img: sev2 },
  { id: 3, name: "Туризм с AR", description: "Предлагаем новые возможности для путешественников, раскрывая историю и культуру мест через интерактивный формат.", img: sev3 },
];

const MainPage: React.FC = () => {
  const [autoPlay, setPlay] = useState(true);
  const [index, setCurrentIndex] = useState(0);
  const blockRefs = useRef(services.map(() => React.createRef<HTMLDivElement>()));
  const additionalRefs = useRef([
    React.createRef<HTMLDivElement>(), // description
    React.createRef<HTMLDivElement>(), // products
    React.createRef<HTMLDivElement>(), // reviews
    React.createRef<HTMLDivElement>(), // team
    React.createRef<HTMLDivElement>(), // accordion
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(), // tg_bot
  ]);

  

  // const goToPrevious = () => {
  //  
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  // };

  // const goToNext = () => {
  //   
  //   setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  // };

  const checkBlocksVisibility = (): void => {
    const windowHeight = window.innerHeight;

    const allRefs = [...blockRefs.current, ...additionalRefs.current];

    allRefs.forEach((blockRef, index) => {
      if (blockRef.current) {
        const blockPosition = blockRef.current.getBoundingClientRect().top;

        if (blockPosition < windowHeight - 100) {
          blockRef.current.style.opacity = "1";
          blockRef.current.style.transform = "translateY(0) translateX(0)";
        } else {
          blockRef.current.style.opacity = "0";
          const refClass = blockRef.current.className;
          const subString = "description";
          blockRef.current.style.transform = refClass.includes(subString) ? "translateX(-45vw)" :  "translateY(5vh)";
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkBlocksVisibility);
    checkBlocksVisibility(); // Проверка при загрузке страницы

    return () => {
      window.removeEventListener('scroll', checkBlocksVisibility);
    };
  }, []);

 


  return (
    <div id="#homepage">
      <Header styles={customStyles} img={logo}></Header>
      <section>
        <div className="info">
          <div className="text-container">
            <h1>Исследуй на грани с реальностью. Создай своё путешествие с CRAN</h1>
            <p>
              Исследуйте интересные места, разгадывайте тайны и погружайтесь в историю с помощью дополненной реальности.
            </p>
            <a href="#tg_bot">Создай свою реальность</a>
          </div>
          <video controls>
            <source src="video.mp4" type="video/mp4" />
            <source src="video.ogg" type="video/ogg" />
            Your browser doesn't support video tag.
          </video>
        </div>
        <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"></path>
          </defs>
          <g className="wave1">
            <use xlinkHref="#wave-path" x="50" y="3"></use>
          </g>
          <g className="wave2">
            <use xlinkHref="#wave-path" x="50" y="0"></use>
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9"></use>
          </g>
        </svg>
      </section>
      <div className='wrapper'>
        {/* <div className="description" ref={additionalRefs.current[0]}>
          <h2>Привет, познакомимся?</h2>
          <p>
            Мы переосмысливаем взаимодействие с виртуальной и дополненной реальностью, объединяя инновационные технологии с традиционными форматами. С нами вы сможете открыть новые горизонты восприятия, погружаясь в миры, где технологии и креативность создают незабываемые впечатления.
          </p>
        </div> */}
        {/* <div className="service-container" id="services" ref={additionalRefs.current[7]}>
          {services.map((service, index) => (
            <div className="service" key={service.id}>
              <img src={service.img} alt="Service" />
              <div className="service-description" ref={blockRefs.current[index]}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div> */}
        {/* <div className="description" id="products" ref={additionalRefs.current[1]}>
          <h2>Одно приложение для множества активностей</h2>
          <p>
            Проходите увлекательные квесты, посещайте захватывающие экскурсии и добавляйте яркие моменты с помощью AR-опыта – всё это собрано в одном удобном приложении прямо на вашем смартфоне!
          </p>
        </div>
        <Carousel products={photos} ref={additionalRefs.current[2]} /> */}
        <div>
          
          <ReviewsGrid reviews={reviews} ref={additionalRefs.current[3]}></ReviewsGrid>
        </div>
        {/* <div className="team-container" id="team" ref={additionalRefs.current[4]}>
          <h2>Наша команда</h2>
          <div className="team">
            {members.map((member) => (
              <div className="member" key={member.id}>
                <img src={tema} alt="Member" />
                <span style={{ color: "gray" }}>Роль в компании</span>
                <span>{member.name} {member.surname}</span>
                <a href={member.url} target="_blank" rel="noopener noreferrer">
                  {member.username}
                </a>
              </div>
            ))}
          </div>
        </div> */}
        <Accordion questionsAnswers={qusetionAnswers} ref={additionalRefs.current[5]}></Accordion>
        <div id="tg_bot" ref={additionalRefs.current[6]}>
          <h2>Хотите дружить?</h2>
          <div className="QR">
            <p>
              Есть другие вопросы или идеи для сотрудничества? Хотите узнать о нас больше? Просто напишите нашему Telegram-боту, и мы с радостью всё расскажем и обсудим!
            </p>
            <img src={bot} alt="QR code" />
          </div>
          <a href="https://t.me/CRAN_Helper_bot" target="_blank" rel="noopener noreferrer" className="bot_button">
            Бот тут
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
