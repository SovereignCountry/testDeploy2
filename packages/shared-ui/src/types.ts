export interface VariantItemType {
  img?: string;
  icon?: React.ReactNode;
  text: string;
  points?: { [key: string]: number };
}

export interface AnswerBirthDateType {
  day: string;
  month: string;
  year: string;
}

export interface QuizStepAnswerItemType {
  question: string;
  answerVariantIndex: number | null;
  answerValue: AnswerBirthDateType | string | number;
  points?: { [key: string]: number };
}

export interface QuizStepItemType {
  question: string;
  questionSmallText?: string;
  answers: VariantItemType[];
  defaultAnswer: string | number | AnswerBirthDateType;
}

export interface QuizStepDataType {
  stepTitle: string;
  questions: QuizStepItemType[];
}

export interface SelectOpetionsType {
  value: string;
  label: string;
}
