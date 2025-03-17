import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Google from '@mui/icons-material/Google';
import Download from '@mui/icons-material/Download'
import Store from '@mui/icons-material/Store'
import sev1 from './sev1.jpg'
import sev2 from './sev2.jpg'
import sev3 from './sev3.jpg'
const ProductsPage = () => {
    interface Photo {
        id: number;
        url: string;
        alt: string;
        name: string;
        description: string;
    }
    const photos: Photo[] = [
        { id: 1, url: sev1, alt: 'Photo 1' , name:"Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        { id: 2, url: sev2, alt: 'Photo 2', name:"Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
        { id: 3, url: sev3, alt: 'Photo 3', name:"Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        
    ];
    const [autoPlay, setPlay] = useState(true);
    const [index, setCurrentIndex] = useState(0);
    useEffect(() => {
        let intervalId : NodeJS.Timeout;
        if (autoPlay){
            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
            }, 3000);
            
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [autoPlay, photos.length]);
    const goToPrevious = () => {
        setPlay(false);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setPlay(false);
        setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <Header></Header>
            <div className = "wrapper">
            <div className = "description">
                <h1>
                Привет, познакомимся?
                </h1>
                <p>
                Мы переосмысливаем взаимодействие с виртуальной и 
дополненной реальностью, объединяя инновационные технологии 
с традиционными форматами. С нами вы сможете открыть новые 
горизонты восприятия, погружаясь в миры, где технологии и 
креативность создают незабываемые впечатления.
                </p>
            </div>
            <div className = "carousel">
                <button onClick = {goToPrevious} disabled = {index === 0} className='carousel-button'> {"<"}</button>
                <div className = "product">
                    
                <img src={photos[index].url} alt = {photos[index].url} />
                <h2>{photos[index].name}</h2>
                <p>{photos[index].description}</p>
                <button>Перейти</button>
                </div>
                <button onClick = {goToNext} disabled = {index === photos.length - 1} className='carousel-button'> {">"}</button>
            </div>
            <div className = "button-container">
                <a href = "https://t.me/cranproject" target='_blank' rel="noopener noreferer"><Download style = {{width: '30%'}}></Download>APK</a>
                <a href = "https://t.me/cranproject" target='_blank' rel= "noopener noreferrer"><Google style = {{width: '30%'}}/> Google</a>
                <a href = "https://t.me/cranproject" target='_blank' rel="noopener noreferer"><Store style = {{width: '30%'}}></Store>Ru Store</a>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};
export default ProductsPage;