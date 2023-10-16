interface Api {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: string;
  headers?: Record<string, string>;
}

const api = async ({ url, method = 'GET', body, headers = {} }: Api) => {
  const req = await fetch(url, { method, body, headers });
  const res = await req.json();
  if (!req.ok) {
    throw new Error('Failed to fetch data.');
  }
  return res;
};

export { api };