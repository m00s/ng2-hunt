class HuntedList {
  products: Array<any> = [];
  constructor(public http: Http) {}

  onInit() {

    const BASE_URL = 'http://localhost:3001';
    const PRODUCTS_API_URL = '/api/products';
    const JSON_HEADERS = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    this.http
      .get(BASE_URL + TODO_API_URL, {
        headers: JSON_HEADERS
      })
      .toRx()
      .map(res => res.json())
      .subscribe(
          data => this.serverData(data),
          err  => this.errorMessage(err)
      );

  }

  serverData(data) {
    console.log('data', data);
    this.data = data;
  }

  errorMessage(err) {
    console.error(err);
  }
}

export HuntedList;
