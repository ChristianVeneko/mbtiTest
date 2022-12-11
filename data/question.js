import { Questions } from "../models/questions.js";
import { data } from "./data.js";
import { data2 } from "./data2.js";
import { data3 } from "./data3.js";
import { data4 } from "./data4.js";


export const questions = data.map(questions => new Questions(questions.question, questions.choices, questions.answer));
export const questions2 = data2.map(questions => new Questions(questions.question, questions.choices, questions.answer));
export const questions3 = data3.map(questions => new Questions(questions.question, questions.choices, questions.answer));
export const questions4 = data4.map(questions => new Questions(questions.question, questions.choices, questions.answer));
