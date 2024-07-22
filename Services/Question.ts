import Question, { IQuestion, IOptions } from "../models/Question";
import { Request, Response } from "express";
import IQuestionResult from "../models/QuestionResult";
import IFormResult from "../models/FormResult";

export const createQuestionInBulk = async (questionList: IQuestion[]) => {
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

export const createQuestion = async (
  questionValue: string,
  question: string,
  options: IOptions,
  correctOption: string
): Promise<IQuestion> => {
  const newQuestion: IQuestion = new Question({
    questionValue,
    question,
    options,
    correctOption,
  });
  await newQuestion.save();

  return newQuestion;
};

export const getQuestions = async (): Promise<IQuestion[]> => {
  return await Question.find();
};

export const getResults = async (questionResultList: IQuestionResult[]): Promise<IFormResult> => {
  const questionList = await Question.find();
  let correctAnswers = 0;
  questionResultList.forEach((questionResult) => {
    const currentQuestion = questionList.find(
      (question) => question.questionValue === questionResult.questionValue
    );
    if (questionResult.option === currentQuestion.correctOption)
      correctAnswers = correctAnswers + 1;
  });

  const formResult: IFormResult = {
      totalCorrectAnswers: correctAnswers,
      totalAnswers: questionResultList.length,
  }

  return formResult;
};
