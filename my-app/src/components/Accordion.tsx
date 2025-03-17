import PropTypes from 'prop-types';

Accordion.propTypes = {
    questionsAnswers: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};
interface QuestionAnswer {
    question: string;
    answer: string;
  }
  
interface AccordionProps {
    questionsAnswers: QuestionAnswer[];
  }
function Accordion({ questionsAnswers } : AccordionProps) {
    return (
        <div className="accordion-qa" >
            {questionsAnswers.map((qa, index) => (
                
                    <details className="question-answer" key={index}>
                        <summary>
                            <h1>{qa.question}</h1>
                        </summary>
                        <p>{qa.answer}</p>
                    </details>
                
            ))}
        </div>
    );
}

export default Accordion;