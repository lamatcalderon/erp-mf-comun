const TOKEN_KEY = "token" as string;

/** 
 * @description get token from localStorage
 */
export const getToken = (): string | null => {
    return window.localStorage.getItem(TOKEN_KEY);
}

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
    window.localStorage.setItem(TOKEN_KEY, token);
}

/**
 * @description remove token from localStorage
 */
export const destroyToken = (): void => {
    window.localStorage.removeItem(TOKEN_KEY);
}

export default { getToken, saveToken, destroyToken };