import { Router, Request, Response } from "express";
import IFormResult from "./models/FormResult";
import { IQuestion } from "./models/Question";
import IQuestionResult from "./models/QuestionResult";
import { createQuestion, getQuestions, getResults } from "./Services/Question";

const router = Router();

router.post("/questions", async (req: Request, res: Response) => {
  try {
    const { questionValue, question, options, correctOption } = req.body;
    const newQuestion: IQuestion = await createQuestion(
      questionValue,
      question,
      options,
      correctOption
    );
    res.status(201).json(newQuestion);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
});

router.get("/questions", async (req: Request, res: Response) => {
  try {
    const questions = await getQuestions();
    res.json(questions);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
});

// TODO: Pendiente por revisar
router.post("/questions/result", async (req: Request, res: Response) => {
  try {
    const { questionResult } = req.body;
    // if (questionResult[0] instanceof questionResult) {
    const questionResultList: IQuestionResult[] = questionResult;
    const formResult: IFormResult = await getResults(questionResultList);

    res.status(200).json(formResult);
    // }
    // else{
    //   res.status(400).json({ message: "incorrect request" });
    // }
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
});

export default router;
