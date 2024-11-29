import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import IReport, { IQuestionsAnswered } from "@/interfaces/IReport";
import { v4 as uuidv4 } from "uuid";

interface IResponseController {
  success: boolean;
  message: string;
}

const initialReport = {
  uuid: "",
  created: new Date(),
  questions: [{ question: "", answer: "" }],
};

export default async function createReport(
  questionsAnswered: IQuestionsAnswered[]
): Promise<IResponseController> {
  const response = { success: false, message: "" };

  try {
    const report: IReport = initialReport;

    report.uuid = uuidv4();
    report.created = new Date();
    report.questions = questionsAnswered.slice(2);
    const result = await addDoc(collection(db, "reports"), report);
    if (result) {
      response.success = true;
      return response;
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.message =
      "Ops, por algum motivo não conseguimos salvar as informações, tente novamente mais tarde.";
    return response;
  }
  return response;
}
