import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion, { QuestionAnswer } from '../components/Accordion';
import ReviewsGrid, { Review } from '../components/ReviewsGrid';
import Carousel, { Product } from '../components/Carousel';
import VisibilityChecker from '../components/checkBlockVisibility';
import logo from '../img/logo.svg';
import tema from '../img/Артемий.jpg';
import user from '../img/user.jpg';
import bot from '../img/TG_Bot_QR_Code.jpg';
import sev1 from '../img/sev1.jpg';
import sev2 from '../img/sev2.jpg';
import sev3 from '../img/sev3.jpg';

interface Service {
  id: number;
  name: string;
  description: string;
  img: string;

};
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

const productReviews: Review[] = [
  { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 3, username: "User", img: user },
  { id: 2, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 4, username: "User" },
  { id: 3, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  { id: 4, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 2, username: "User" },
  { id: 5, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  { id: 6, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  { id: 7, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  { id: 8, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
];



const productQusetionAnswers: QuestionAnswer[] = [
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
  img: string,
}

const productsAll: Product[] = [
  { id: 1, img: sev1, name: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", reviews: productReviews, questionAnswer: productQusetionAnswers },
  { id: 2, img: sev2,  name: "Lorem ipsum dolor sit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", reviews: productReviews, questionAnswer: productQusetionAnswers},
  { id: 3, img: sev3,  name: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", reviews: productReviews, questionAnswer: productQusetionAnswers},
];

const members: CommandMember[] = [
  { id: 1, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin", img: tema },
  { id: 2, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin", img: tema},
  { id: 3, name: 'Artem', surname: 'Volkonitin', username: '@artem_volkonitin', url: "https://t.me/artem_volkonitin", img: tema },
];

const services: Service[] = [
  { id: 1, name: "AR-Экскурсии", description: "Добавляем интерактивные AR-элементы для улучшения вашего экскурсионного опыта.", img: sev1 },
  { id: 2, name: "AR-квесты", description: "Создаём полное погружение в игровой формат, обеспечивая уникальное взаимодействие и интересные сюжетные линии.", img: sev2 },
  { id: 3, name: "Туризм с AR", description: "Предлагаем новые возможности для путешественников, раскрывая историю и культуру мест через интерактивный формат.", img: sev3 },
];

const MainPage: React.FC = () => {
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const additionalRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    blockRefs.current = blockRefs.current.slice(0, services.length);
    additionalRefs.current = additionalRefs.current.slice(0, 8);
  }, []);

  const setBlockRef = (index: number) => (el: HTMLDivElement | null) => {
    blockRefs.current[index] = el;
  };

  const setAdditionalRef = (index: number) => (el: HTMLDivElement | null) => {
    additionalRefs.current[index] = el;
  };

  return (
    <div id="#homepage">
      <VisibilityChecker blockRefs={blockRefs} additionalRefs={additionalRefs} />
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
        <div className="description" ref={setAdditionalRef(0)}>
          <h2>Привет, познакомимся?</h2>
          <p>
            Мы переосмысливаем взаимодействие с виртуальной и дополненной реальностью, объединяя инновационные технологии с традиционными форматами. С нами вы сможете открыть новые горизонты восприятия, погружаясь в миры, где технологии и креативность создают незабываемые впечатления.
          </p>
        </div>
        <div className="service-container" id="services" ref={setAdditionalRef(7)}>
          {services.map((service, index) => (
            <div className="service" key={service.id}>
              <img src={service.img} alt="Service" />
              <div className="service-description" ref={setBlockRef(index)}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="description" id="products" ref={setAdditionalRef(1)}>
          <h2>Одно приложение для множества активностей</h2>
          <p>
            Проходите увлекательные квесты, посещайте захватывающие экскурсии и добавляйте яркие моменты с помощью AR-опыта – всё это собрано в одном удобном приложении прямо на вашем смартфоне!
          </p>
        </div>
        <Carousel products={productsAll} ref={setAdditionalRef(2)} />
        <div>
          <ReviewsGrid reviews={reviews} ref={setAdditionalRef(3)}></ReviewsGrid>
        </div>
        <div className="team-container" id="team" ref={setAdditionalRef(4)}>
          <h2>Наша команда</h2>
          <div className="team-members">
            {members.map((member) => (
              <div className="member" key={member.id}>
                <img src={member.img} alt="Member" />
                <span style={{ color: "gray" }}>Роль в компании</span>
                <span>{member.name} {member.surname}</span>
                <a href={member.url} target="_blank" rel="noopener noreferrer">
                  {member.username}
                </a>
              </div>
            ))}
          </div>
        </div>
        <Accordion questionsAnswers={qusetionAnswers} ref={setAdditionalRef(5)}></Accordion>
        <div id="tg_bot" ref={setAdditionalRef(6)}>
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
