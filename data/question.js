import { Questions } from "../models/questions.js";
import { data } from "./data.js";

export const questions = data.map(questions => new Questions(questions.question, questions.choices, questions.answer));