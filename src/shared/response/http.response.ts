import { Response } from "express";

export enum HttpStatus {
  ACCEPTED = 202,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
  NOT_FOUND = 404,
  OK = 200,
  UNAUTHORIZED = 401,
}

export class HttpResponse {
  OK(res: Response, data: any): Response {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      statusMessage: "Success",
      data,
    });
  }

  NotFound(res: Response, data: any): Response {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMessage: "Not Found",
      error: data,
    });
  }

  Unauthorized(res: Response, data: any): Response {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMessage: "Unauthorized",
      error: data,
    });
  }

  Forbidden(res: Response, data: any): Response {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      statusMessage: "Forbidden",
      error: data,
    });
  }

  Error(res: Response, data: any): Response {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMessage: "Internal Server Error",
      error: data,
    });
  }
}
