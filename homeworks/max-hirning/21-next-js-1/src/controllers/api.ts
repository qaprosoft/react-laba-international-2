import { ITile } from "@/types/tile";

class TilesAPI {
  constructor(private readonly url: string) {}

  async getOne(): Promise<ITile|void> {
    try {
      const response = await fetch(`${this.url}?limit=1`);
      if (!response.ok) throw new Error('Network response is not ok');
      const responseData = await response.json();

      return responseData[0];
    } catch (error) {
      console.error(error);
    }
  }

  async getMany(limit: number): Promise<ITile[]|void> {
    try {
      const response = await fetch(`${this.url}?limit=${limit}`);
      if (!response.ok) throw new Error('Network response is not ok');
      const responseData = await response.json();

      return responseData;
    } catch (error) {
      console.error(error);
    }
  }
}

export const tilesAPI = new TilesAPI('https://tinyfac.es/api/data');