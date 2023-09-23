class TilesAPI {
  constructor(private readonly url: string) {}

  async getOne() {
    try {
      const response = await fetch(`${this.url}?limit=1`);
      if (!response.ok) throw new Error('Network response is not ok');
      const responseData = await response.json();

      const {id, url, first_name, last_name} = responseData[0];
      return {id, url, first_name, last_name};
    } catch (error) {
      console.error(error);
    }
  }
}

export const tilesAPI = new TilesAPI('https://tinyfac.es/api/data');