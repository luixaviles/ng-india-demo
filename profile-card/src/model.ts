export interface User {
  id: number;
  fullName: string;
  role: string;
  avatar?: string;
}

export interface UserDetail {
  id: number,
  fullName: string;
  role: string,
  country: string;
}
