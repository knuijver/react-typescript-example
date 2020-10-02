import axios from "axios";
import { OfficeLocation, RatingResponse } from "../models";

export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

export type HttpRequest = {
  method: Method;
  url: string;
  contentType?: string;
  content?: any;
};

async function send<TResponse>({
  url,
  content,
  method,
  contentType
}: HttpRequest): Promise<TResponse> {
  const response = await axios.request<TResponse>({
    url: url,
    method: method,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
      "Content-type": contentType || "application/json"
    },
    data: content
  });

  return response.data;
}

export const officeLocationRatings = (
  endpoint: string
): Promise<RatingResponse> => {
  return send<RatingResponse>({
    method: "GET",
    url: endpoint
  });
};
