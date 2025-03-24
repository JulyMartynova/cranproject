import React, { forwardRef, ForwardRefRenderFunction } from 'react';


export interface QuestionAnswer {
    question: string;
    answer: string;
  }
  
interface AccordionProps {
    questionsAnswers: QuestionAnswer[];
  }
  const Accordion: ForwardRefRenderFunction<HTMLDivElement, AccordionProps> = (
    { questionsAnswers },
    ref
  ) => {
    return (
      <div className="accordion-qa" ref={ref}>
        <h2>Вопросы</h2>
        {questionsAnswers.map((qa, index) => (
          <details className="question-answer" key={index}>
            <summary>{qa.question}</summary>
            <p>{qa.answer}</p>
          </details>
        ))}
      </div>
    );
  };


export default React.memo(forwardRef(Accordion));