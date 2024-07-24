import Question, { IQuestion, IOptions } from "../models/Question";
import { Request, Response } from "express";
import IQuestionResult from "../models/QuestionResult";
import IFormResult from "../models/FormResult";
import { create, createInBulk, getAll } from "../repositories/QuestionRepository";
import { getAll as getAllQuestionResult } from "../repositories/QuestionResultRepository";

export const createQuestionInBulk = async (questionList: IQuestion[]) => {
  try {
    await createInBulk(questionList);
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
  await create(newQuestion);

  return newQuestion;
};

export const getQuestions = async (): Promise<IQuestion[]> => {
  return await getAll();
};

export const getResults = async (questionResultList: IQuestionResult[]): Promise<IFormResult> => {
  const questionList = await getAll();
  var formResult = await getAllQuestionResult(questionResultList, questionList);

  return formResult;
};
