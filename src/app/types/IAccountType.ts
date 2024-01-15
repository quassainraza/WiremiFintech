export interface IAccountType {
  email: string;
  name: string;
  businessName?: string;
  selectIndustry: string;
  password: string;
  pinCode: string;
  wiremi_id: string;
  image: string;
  telephone: string;
  tokens?: {
    access_token?: string;
    refresh_token?: string;
  };
}