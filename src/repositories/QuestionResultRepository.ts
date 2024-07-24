import IFormResult from "../models/FormResult";
import { IQuestion } from "../models/Question";
import IQuestionResult from "../models/QuestionResult";

export const getAll = async (questionResultList: IQuestionResult[], questionList: IQuestion[]): Promise<IFormResult> => {
    let correctAnswers = 0;
    questionResultList.forEach((questionResult) => {
      const currentQuestion = questionList.find(
        (question) => question.questionValue === questionResult.questionValue
      );
      if (questionResult.option === currentQuestion?.correctOption)
        correctAnswers = correctAnswers + 1;
    });
  
    const formResult: IFormResult = {
        totalCorrectAnswers: correctAnswers,
        totalAnswers: questionResultList.length,
    }
  
    return formResult;
  };
  