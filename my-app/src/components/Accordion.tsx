import React, { CSSProperties, forwardRef, ForwardRefRenderFunction } from 'react';


export interface QuestionAnswer {
    question: string;
    answer: string;
  }
  
interface AccordionProps {
    questionsAnswers: QuestionAnswer[];
    styles?:{
      animation: CSSProperties,
      opacity: CSSProperties,
      transform: CSSProperties,
    } 
  }
  const Accordion: ForwardRefRenderFunction<HTMLDivElement, AccordionProps> = (
    { questionsAnswers },
    ref?
  ) => {
    return (
      <div>
        <h2>Вопросы</h2>
      <div className="accordion-qa" ref={ref}>
        
        {questionsAnswers.map((qa, index) => (
          <details className="question-answer" key={index}>
            <summary>{qa.question}</summary>
            <p>{qa.answer}</p>
          </details>
        ))}
      </div>
      </div>
    );
  };


export default React.memo(forwardRef(Accordion));