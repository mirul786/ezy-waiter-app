export interface SignUpApiObj {
  username: string;
  email: string;
  name: string;
  user_type: string;
}

export type SignInFields = {
  email: string;
  password: string;
  phone?: string | undefined;
};


export interface LoginProps {
  setIsAuthenticated?: (value: boolean) => void;
}