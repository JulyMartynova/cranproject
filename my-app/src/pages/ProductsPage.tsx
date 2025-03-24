import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Review } from '../components/ReviewsGrid';
import {QuestionAnswer} from '../components/Accordion'
import user from '../img/user.jpg'
import sev1 from '../img/sev1.jpg';
import sev2 from '../img/sev2.jpg';
import sev3 from '../img/sev3.jpg';
import Carousel, { Product } from '../components/Carousel';
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
const productsAll: Product[] = [
  { id: 1, img: sev1, name: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", reviews: productReviews, questionAnswer: productQusetionAnswers },
  { id: 2, img: sev2,  name: "Lorem ipsum dolor sit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", reviews: productReviews, questionAnswer: productQusetionAnswers},
  { id: 3, img: sev3,  name: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", reviews: productReviews, questionAnswer: productQusetionAnswers},
];
const ProductsPage = () => {
  useEffect(() => {
          document.title = `Наши Продукты`; // Устанавливаем заголовок страницы
      }, []);
  
  
  const [index, setCurrentIndex] = useState(0);

  
  

  return (
    <div>
      <Header />
      <div className="wrapper">
      <div className="description">
          <h1>
            Одно приложение для множества активностей
          </h1>
          <p>
            Проходите увлекательные квесты, посещайте захватывающие экскурсии и добавляйте яркие моменты с помощью AR-опыта – всё это собрано в одном удобном приложении прямо на вашем смартфоне!
            Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut
enim ad minim veniam, quis
nostrud exercitation ullamco
laboris nisi ut aliquip ex ea
commodo consequat. 
          </p>
        </div>
        <Carousel products={productsAll}></Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
