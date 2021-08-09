export interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(login: string, password: string): Promise<void>;
  signOut(): void;
  signInGoogle(): void;
  loading: boolean;
}
