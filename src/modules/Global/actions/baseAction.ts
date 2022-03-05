import { toast } from "react-toastify";

export class BaseAction {
    static DEFAULT_URL = '';

    static apiResource(
        url: string,
        method: string = REQUEST_METHOD.GET,
        params?: any,
    ): Promise<any> {
        let newUrl: string = url;
        if (method === REQUEST_METHOD.GET && params) {
            const queryParams: string = Object
                .keys(params)
                .map((key: string) => `${key}=${params[key]}`)
                .join('&');
            newUrl = `${newUrl}?${queryParams}`;
        }

        return fetch(
            `${this.DEFAULT_URL}${newUrl}`,
            {
                method,
                body: REQUEST_METHOD.POST ? params : null,
                headers: {
                    ['Content-Type']: 'application/x-www-form-urlencoded',
                },
            }
        )
            .then(response => response.json())
            .catch((e) => toast(e.message, { type: 'error' }));
    }
}