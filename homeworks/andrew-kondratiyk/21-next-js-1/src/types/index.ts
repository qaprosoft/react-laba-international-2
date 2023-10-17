export type AvatarResponseApi = {
  approved: boolean;
  last_name: string;
  url: string;
  created_at: string;
  source: AvatarSource;
  updated_at: string;
  gender: string;
  id: number;
  first_name: string;
};

export type AvatarSource = {
  created_at: string;
  platform: string;
  id: number;
  name: string;
  updated_at: string;
};

export type AvatarResponse = AvatarResponseApi & {
  custom_id: string;
};

export type ApiError = {
  error: boolean;
  reason: string;
};
