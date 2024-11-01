export default interface IReport {
  uuid: string;
  created: Date;
  questions: IQuestionsAnswered[];
  address: string;
}
interface IQuestionsAnswered {
  question: string;
  answere: string;
}
