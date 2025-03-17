import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.png';
import user from './user.jpg';
import bot from './TG_Bot_QR_Code.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Render = ({filledStars} : {filledStars: number}) => {
    const totalStars = 5;
    const [unfilledStars, setStars] = useState(totalStars)
    const starsArray = [...Array(totalStars)];
    const changeStars = () => {
        setStars((unfilledStars) => unfilledStars > 0 ? unfilledStars - 1 : 0 )
    }
    return (
        <div>
            {starsArray.map((_, index) => (
        <span
          key={index}
          style={{
            color: 'black',
            fontSize: '24px',
          }}  
        >
          {index < filledStars ? '★' : '☆'}
        </span>
      ))}
        </div>
    )

}

const MainPage: React.FC = () => {
const blockRef1 = useRef<HTMLDivElement>(null);
    const blockRef2 = useRef<HTMLDivElement>(null);
    const blockRef3 = useRef<HTMLDivElement>(null);
    const checkBlocksVisibility = (): void => {
    const windowHeight = window.innerHeight;
    
    const checkBlockVisibility = (blockRef: React.RefObject<HTMLDivElement| null>) => {
      if (blockRef.current) {
        const blockPosition = blockRef.current.getBoundingClientRect().top;

        if (blockPosition < windowHeight - 100) {
          blockRef.current.style.opacity = "1";
          blockRef.current.style.transform = "translateY(0)";
        }
      }
    };

    checkBlockVisibility(blockRef1);
    checkBlockVisibility(blockRef2);
    checkBlockVisibility(blockRef3);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkBlocksVisibility);
    checkBlocksVisibility(); // Проверка при загрузке страницы

    return () => {
      window.removeEventListener('scroll', checkBlocksVisibility);
    };
  }, []);
interface Review {
    id: number;
    text: string;
    mark: number;
    img: string;
    username: string;
}
const reviews: Review[] = [
    { id: 1, text: " ationullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 3, username: "User", img : user},
    { id: 2, img : user, text: " Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 4, username: "User"},
    { id: 3, img :user, text: " Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User"},
    { id: 4, img : user, text: " Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 2, username: "User"},
    { id: 5, img : user, text: " Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User"},
    { id: 6, img : user, text: " Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.", mark: 5, username: "User"},
];
const [startIndex, setStartIndex] = useState(0);
const customStyles = {
    header: {
      backgroundColor: 'black',
      color: 'white',
    },
    navItem: {
      color: 'white',
    },
  };

const reviewsShow = 4;
const reviewsSlice = reviews.slice(startIndex, startIndex + reviewsShow);
const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
};
const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, reviews.length - reviewsShow));
};
const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
};
const handleClose = () => {
    const element = document.querySelector("fieldset");
    if (element) {
        element.classList.add('closed');
        console.log('Элемент скрыт');
    } else {
        console.error('Элемент не найден');
    }
};
return (
    <div className = "homepage">
        <Header styles = {customStyles}></Header>
    <section className="cran-container">
           
        <div className="text-container">
        <h1>
                Исследуй на грани с реальностью. Создай свое путешествие с CRAN
            </h1>
            <p>
                Исследуйте интересные места, разгадывайте тайны и
                погружайтесь в историю с помощью дополненной
                реальности.
            </p>
            <a href="/products" target="_blank" rel="noopener noreferrer">
                    Создай свою реальность
                
            </a>
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
    <div className="review-container" ref={blockRef1}>
        <button className = "previous" onClick = {handlePrevious} disabled = {startIndex===0}>&lt;</button>
        <div className="review-greed">
            {reviewsSlice.map((review) => (
                <div className="review" key={review.id}>
                    <h3>Review {review.id}</h3>
                    <Render filledStars = {review.mark}/>
                    <p>{review.text}</p>
                    <span></span>
                    <figure>
                <img src={review.img} alt="user" />
                <figcaption>{review.username}</figcaption>
            </figure>
                    </div>
                    
            ))}
        
        </div>
        <button className = "next" onClick = {handleNext} disabled={startIndex === reviews.length - reviewsShow}>&gt;</button>
            </div>
            <div className = "accordion-qa" ref={blockRef2}>
            <details className="question-answer">
                <summary>Чем вы занимаетесь?</summary>
                <p>Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной
                реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным.</p>
            </details>
            <details className="question-answer">
                <summary>Чем вы занимаетесь?</summary>
                <p>Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной
                реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным.</p>
            </details>
            <details className="question-answer">
                <summary>Чем вы занимаетесь?</summary>
                <p>Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной
                реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным.</p>
            </details>
            <details className="question-answer">
                <summary>Чем вы занимаетесь?</summary>
                <p>Мы — компания, которая переосмысливает экскурсионный туризм, объединяя традиционные форматы с передовыми технологиями дополненной
                реальности. CRAN предлагает инновационные подходы, которые делают опыт погружения более увлекательным, глубоким и информативным.</p>
            </details>
            </div>
            
            
            <div className="bot" ref={blockRef3}>
                <h2>Хотите дружить?</h2>
                <div className="QR">
                    <p>
                        Есть другие вопросы или идеи для сотрудничества? Хотите узнать о
                        нас больше? Просто напишите нашему Telegram-боту, и мы с
                        радостью всё расскажем и обсудим!
                    </p>
                    <img src={bot} alt="QR code" />
                </div>
                <a href="https://t.me/CRAN_Helper_bot" target="_blank" rel="noopener noreferrer" className="bot_button">
                    Бот тут
                </a>
            </div> 
            <form>
                
    <fieldset>
        <legend>Хотите связаться?</legend>
        <button type = "button" className='close' onClick={handleClose}>X</button>
        <input type="text"  placeholder='Введите имя'/>
        <input type="text"  placeholder='Введите фамилию'/>
        <input type="text"  placeholder='Введите почту'/>
        <button type="submit" onClick={handleSubmit}>Отправить</button>
    </fieldset>
</form>

            <Footer></Footer>
        </div>
        

    );
};

export default MainPage;
