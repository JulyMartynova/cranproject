import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewsGrid from '../components/ReviewsGrid';
import Accordion from '../components/Accordion';
import { Review } from '../components/ReviewsGrid';
import { QuestionAnswer } from '../components/Accordion';
import Google from '@mui/icons-material/Google';
import Download from '@mui/icons-material/Download';
import Store from '@mui/icons-material/Store';
import user from '../img/user.jpg';
import sev1 from '../img/sev1.jpg';
import sev2 from '../img/sev2.jpg';
import sev3 from '../img/sev3.jpg';
import { Product } from '../components/Carousel';

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

const productsData :Record<string, Product> = {
  "Lorem ipsum dolor sit amet": { id: 1, img: sev1, name: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", reviews: productReviews, questionAnswer: productQusetionAnswers },
  "Lorem ipsum dolor sit": { id: 2, img: sev2, name: "Lorem ipsum dolor sit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", reviews: productReviews, questionAnswer: productQusetionAnswers },
  "Lorem ipsum dolor": { id: 3, img: sev3, name: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", reviews: productReviews, questionAnswer: productQusetionAnswers },
};

const ProductPage: React.FC = () => {
  const { productName } = useParams<{ productName?: string }>();
  const [product, setProduct] = useState<{
    id: number;
    img: string;
    name: string;
    description: string;
    reviews: Review[];
    questionAnswer: QuestionAnswer[];
  } | null>(null);
  const refs= useRef ([
    React.createRef<HTMLDivElement>(), // description
    React.createRef<HTMLDivElement>(),
  ]
  )
  const checkBlocksVisibility = (): void => {
      const windowHeight = window.innerHeight;
      const allRefs = [...refs.current];
  
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
  useEffect(() => {
    if (productName) {
      const decodedProductName = decodeURIComponent(productName);
      const productData = productsData[decodedProductName];
      setProduct(productData);
    }
  }, [productName]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="description">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <div className="button-container">
          <a href="https://t.me/cranproject" target="_blank" rel="noopener noreferrer">
            <Download style={{ width: '30%' }} /> APK
          </a>
          <a href="https://t.me/cranproject" target="_blank" rel="noopener noreferrer">
            <Google style={{ width: '30%' }} /> Google
          </a>
          <a href="https://t.me/cranproject" target="_blank" rel="noopener noreferrer">
            <Store style={{ width: '30%' }} /> Ru Store
          </a>
        </div>
        <div>
          <ReviewsGrid reviews={product.reviews} ref = {refs.current[0]}/>
        </div>
        <div>
          <Accordion questionsAnswers={product.questionAnswer} ref = {refs.current[1]}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
