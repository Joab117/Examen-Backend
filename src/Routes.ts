import { Router, Request, Response } from "express";
import IFormResult from "./models/FormResult";
import { IQuestion } from "./models/Question";
import IQuestionResult from "./models/QuestionResult";
import { createQuestion, getQuestions, getResults } from "./Services/Question";
import { create, getAll, getAllResults } from "./controllers/QuestionController";

const router = Router();

router.post("/questions", create);

router.get("/questions", getAll);

// TODO: Pendiente por revisar
router.post("/questions/result", getAllResults);

export default router;
