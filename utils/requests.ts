import { Page, Response } from "playwright";

export async function waitForResponse(page: Page, includeUrl: string, httpMethod: 'POST' | 'GET' | 'DELETE' | 'PUT'): Promise<Response> {
    return page.waitForResponse((response) => {
        return response.url().includes(includeUrl) && response.request().method() === httpMethod;
    });
};
