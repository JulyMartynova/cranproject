import React, {useRef, useEffect} from 'react';
import Accordion, { QuestionAnswer } from '../components/Accordion';
import ReviewsGrid, { Review } from '../components/ReviewsGrid';
import user from '../img/user.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Google from '@mui/icons-material/Google';
import Download from '@mui/icons-material/Download';
import Store from '@mui/icons-material/Store';
import VisibilityChecker from '../components/checkBlockVisibility';
const reviews1: Review[] = [
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 3, username: "User", img: user },
    { id: 2, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 4, username: "User" },
    { id: 3, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 4, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 2, username: "User" },
    { id: 5, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 6, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 7, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 8, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  ];
  
  const qusetionAnswers1: QuestionAnswer[] = [
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
  ];

  const reviews2: Review[] = [
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 3, username: "User", img: user },
    { id: 2, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 4, username: "User" },
    { id: 3, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 4, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 2, username: "User" },
    { id: 5, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 6, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 7, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 8, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  ];
  
  const qusetionAnswers2: QuestionAnswer[] = [
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
  ];
  const reviews3: Review[] = [
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 3, username: "User", img: user },
    { id: 2, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 4, username: "User" },
    { id: 3, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 4, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 2, username: "User" },
    { id: 5, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 6, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 7, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
    { id: 8, img: user, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User" },
  ];
  
  const qusetionAnswers3: QuestionAnswer[] = [
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
    { question: "Чем вы занимаетесь?", answer: "Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным." },
  ];


const customStyle  = {
    reviewStyles: {
      animation: 'slide 1s ease-in-out 1s both',
    },
    buttonStyles: {
        animation: 'slideUp 1s ease-in-out 1s both'
    }
  }
const RightsPage : React.FC = () => {
    const allRefs = useRef<(HTMLDivElement|null)[]>([]);

    useEffect(() => {
        allRefs.current = allRefs.current.slice(0, 10);

        return () => {
            allRefs.current = [];
        };

    }, [allRefs])
    const setRef = (index: number) => (el: HTMLDivElement | null) => {
        allRefs.current[index] = el;
    };
    return(
        <div>
            <VisibilityChecker additionalRefs={allRefs} />
            <Header />
            
            <div className = "wrapper">
            <div className="description" style = {{
          animation: "slideUp 2s ease-in-out  both",
        }}>
            <h2>Одно приложение для множества активностей</h2>
            <p>
                Проходите увлекательные квесты, посещайте захватывающие экскурсии и добавляйте яркие моменты с помощью AR-опыта – всё это собрано в одном удобном приложении прямо на вашем смартфоне!
            </p>
            <div className="button-container" style ={customStyle.buttonStyles}>
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
           
          <ReviewsGrid reviews={reviews1} styles={customStyle} />
          <Accordion questionsAnswers={qusetionAnswers1} ref = {setRef(0)}/>
            </div>
            <div className = "wrapper">
            <div className="description" ref = {setRef(1)}>
            <h2>Одно приложение для множества активностей</h2>
            <p>
                Проходите увлекательные квесты, посещайте захватывающие экскурсии и добавляйте яркие моменты с помощью AR-опыта – всё это собрано в одном удобном приложении прямо на вашем смартфоне!
            </p>
            <div className="button-container" ref = {setRef(2)}>
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
           
          <ReviewsGrid reviews={reviews2} ref = {setRef(3)}/>
          <Accordion questionsAnswers={qusetionAnswers2} ref = {setRef(4)}/>
            </div>
            <div className = "wrapper">
            <div className="description" ref = {setRef(5)}>
            <h2>Одно приложение для множества активностей</h2>
            <p>
                Проходите увлекательные квесты, посещайте захватывающие экскурсии и добавляйте яркие моменты с помощью AR-опыта – всё это собрано в одном удобном приложении прямо на вашем смартфоне!
            </p>
            <div className="button-container" ref = {setRef(6)}>
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
            
          <ReviewsGrid reviews={reviews3} ref = {setRef(7)}/>
          <Accordion questionsAnswers={qusetionAnswers3} ref = {setRef(8)}/>
            </div>
        
            

       
        <Footer/>
        </div>
    )
}

export default RightsPage;