export interface FormValues {
  name: string | number | readonly string[];
  email: string | number | readonly string[];
  subject: string | number | readonly string[];
  message: string | number | readonly string[];
}

export type FormItems = {
  name: string;
  placeholder: string;
  type: string;
  validate: (value: any) => any;
  emailValue: string | number | readonly string[];
}[];
