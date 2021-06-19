import { error } from "../util/stores";
import { isEmpty } from "lodash";

const apiEndpoint = "http://localhost:8080";

export function parseWithDate(jsonString: string): any {
  var reDateDetect = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/; // startswith: 2015-04-29T22:06:55
  var resultObject = JSON.parse(jsonString, (key: any, value: any) => {
    if (typeof value == "string" && reDateDetect.exec(value)) {
      return new Date(value);
    }
    return value;
  });
  return resultObject;
}

export async function apiCall<T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  path: string,
  payload: any,
  authenticated: boolean = true,
  errorMessage: string = "Request failed.",
  throwError: boolean = true
): Promise<T> {
  const response = await fetch(`${apiEndpoint}/${path}`, {
    method,
    body: !isEmpty(payload) ? JSON.stringify(payload) : undefined,
    headers: {
      Authorization: authenticated && localStorage.getItem("jwt"),
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    error.set(errorMessage);
    if (throwError) {
      throw new Error(errorMessage);
    }
  } else {
    const text = await response.text();
    if (text === "") return true as unknown as T;
    return parseWithDate(text) as T;
  }
}
