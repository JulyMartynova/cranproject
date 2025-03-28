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

const customStyle  = {
  reviewStyles: {
    animation: 'slide 1s ease-in-out 2s both',
  }
}
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

  const allRefs = useRef<(HTMLDivElement|null)[]>([]);

  useEffect(() => {
    allRefs.current = allRefs.current.slice(0, 1);

    return () => {
      allRefs.current = [];
    }
  }, [allRefs])
  
  useEffect(() => {
    if (productName) {
      const decodedProductName = decodeURIComponent(productName);
      const productData = productsData[decodedProductName];
      setProduct(productData);
    }
  }, [productName]);

  const setRef = (index: number) => (el : HTMLDivElement | null) => {
    allRefs.current[index] = el;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="description" style = {{
          animation: "slideUp 2s ease-in-out  both",
        }}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="button-container" style ={{ animation: 'slideUp 1s ease-in-out 1s both'}}>
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
        </div>
        
        
          <ReviewsGrid reviews={product.reviews} styles = {customStyle}/>
        
          <Accordion questionsAnswers={product.questionAnswer} ref = {setRef(0)}/>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
