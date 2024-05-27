export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp extends SignIn {
  confirmPassword: string;
}

export interface GeneralInputType {
  type: string;
  placeholder: string;
}

export interface FormInputType extends GeneralInputType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
