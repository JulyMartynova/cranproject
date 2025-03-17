import PropTypes from 'prop-types';
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
        {questionsAnswers.map((qa, index) => (
          <details className="question-answer" key={index}>
            <summary>{qa.question}</summary>
            <p>{qa.answer}</p>
          </details>
        ))}
      </div>
    );
  };

Accordion.propTypes = {
    questionsAnswers: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default forwardRef(Accordion);