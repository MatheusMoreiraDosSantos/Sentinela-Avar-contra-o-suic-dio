export default interface IReport {
  uuid: string;
  created: Date;
  questions: IQuestionsAnswered[];
}
export interface IQuestionsAnswered {
  question: string;
  answer: string;
}
