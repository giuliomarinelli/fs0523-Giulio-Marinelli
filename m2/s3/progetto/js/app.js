class App {
    static endpoint = 'https://striveschool-api.herokuapp.com/api/product';
    static authToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjI0NDI1NGU4ODAwMTgzZjE4YmYiLCJpYXQiOjE2OTk2MDcxMDksImV4cCI6MTcwMDgxNjcwOX0.F_Ec6SLhYWCBba58nqj_F1n3Mq00vsYFbylaWW5H2Yg';
    static async AJAX(method = 'GET', obj = {}, id = null) {
        let url;
        let options = {
            headers: {
                'Authorization': this.authToken
            }
        }
        switch (method) {
            case 'GET':
                url = this.endpoint;
                break;
            case 'POST':
                options.method = 'POST';
                options.body = JSON.stringify(obj);
                options.headers['Content-Type'] = 'application/json';
                url = this.endpoint;
                break;
            case 'PUT':
                options.method = 'PUT';
                options.body = JSON.stringify(obj);
                options.headers['Content-Type'] = 'application/json';
                url = `${this.endpoint}/${id}`;
                break;
            case 'DELETE':
                options.method = 'DELETE';
                url = `${this.endpoint}/${id}`;
                break;
        }
        const res = await fetch(url, options);
        return await res.json();
    }
    static async clarAllData() {
        const productsArray = await this.AJAX();
        productsArray.forEach(async (el) => {
            await this.AJAX('DELETE', null, el._id);
        })
    }

}
