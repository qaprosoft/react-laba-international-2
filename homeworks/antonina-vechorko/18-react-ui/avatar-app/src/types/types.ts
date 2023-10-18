export type ApiResponse = {
  url: string;
  id: number;
  last_name: string;
  first_name: string;
  gender: string;
  approved: boolean;
  created_at: string;
  updated_at: string;
  source: ResponseSource;
};

export type ResponseSource = {
  name: string;
  id: number;
  platform: string;
  created_at: string;
  updated_at: string;
};
