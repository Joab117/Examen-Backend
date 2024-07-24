import Question, { IOptions, IQuestion } from "../models/Question";

export const createInBulk = async (questionList: IQuestion[]) => {
    try {
      for (const question of questionList) {
        const newQuestion = new Question({
          questionValue: question.questionValue,
          question: question.question,
          options: question.options,
          correctOption: question.correctOption,
        });
        await newQuestion.save();
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const create = async (newQuestion: IQuestion): Promise<IQuestion> => {
    await newQuestion.save();
    return newQuestion;
  };

  export const getAll = async (): Promise<IQuestion[]> => {
    return await Question.find();
  };