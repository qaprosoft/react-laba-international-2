interface Avatar {
  approved: boolean;
  created_at: string;
  first_name: string;
  gender: string;
  id: number;
  last_name: string;
  source: {
    updated_at: string;
    platform: string;
    name: string;
    id: number;
    created_at: string;
  };
  updated_at: string;
  url: string;
}

export type {Avatar};
