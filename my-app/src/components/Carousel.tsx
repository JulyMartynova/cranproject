import {  useState, useEffect, forwardRef, ForwardRefRenderFunction, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {Review } from './ReviewsGrid';
import {QuestionAnswer} from './Accordion'

export interface Product {
  id: number;
  name: string;
  description: string;
  img: string;
  reviews: Review[];
  questionAnswer: QuestionAnswer[];
}

interface CarouselProps {
  products: Product[];
  
}

const Carousel: ForwardRefRenderFunction<HTMLDivElement, CarouselProps> = (
    { products}, ref
  ) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleIndices, setVisibleIndices] = useState<boolean[]>([false, false, false]);
  const memorizedProducts = useMemo(() => products, [products]);
  const navigate = useNavigate();

  const showPrevious = () => {
    visibleIndices[currentIndex] = false;
    setVisibleIndices(visibleIndices)
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
    visibleIndices[currentIndex] = false;
    setVisibleIndices(visibleIndices);
  };

  const showNext = () => {
    visibleIndices[currentIndex] = false;
    setVisibleIndices(visibleIndices);
    setCurrentIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
    visibleIndices[currentIndex] = false;
    setVisibleIndices(visibleIndices);
    
  };
  const onClickProduct = (productName: string) =>{
    const encodedProductName = encodeURIComponent(productName);
    navigate(`/products/${encodedProductName}`)
  }
  useEffect(() => {
    const newVisibleIndices = new Array(products.length).fill(false);
    
    setVisibleIndices(newVisibleIndices);

    const timer = setTimeout(() => {
      setVisibleIndices(prev => {
        const newIndices = [...prev];
        newIndices[currentIndex] = true;
        return newIndices;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <div className="carousel-container" ref={ref}>
        <button className="prevButton" onClick={showPrevious}>
        &#10094;
      </button>
      
    <div className="carousel">
      <div
        className="carousel-images"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
        }}
      >
        {/* Отображение каждого продукта */}
        {memorizedProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} loading='lazy'/>
            <h3 style={{ opacity: visibleIndices[currentIndex] ? 1 : 0,
                transition: 'opacity 0.5s'}}>{product.name}</h3>
            <p style={{ opacity: visibleIndices[currentIndex] ? 1 : 0,
                transition: 'opacity 0.5s'}}>{product.description}</p>
                <button style={{ opacity: visibleIndices[currentIndex] ? 1 : 0,
                transition: 'opacity 0.5s'}} onClick = {()=> onClickProduct(product.name)}>Перейти</button>
          </div>
        ))}
      </div>
      
    </div>
    <button className="nextButton" onClick={showNext}>
        &#10095;
      </button>
    </div>
  );
};

export default forwardRef(Carousel);