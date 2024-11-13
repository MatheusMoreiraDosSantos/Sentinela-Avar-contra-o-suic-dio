export default interface IReport {
  uuid: string;
  created: Date;
  questions: IQuestionsAnswered[];
  address: string;
}
export interface IQuestionsAnswered {
  question: string;
  answer: string;
}
