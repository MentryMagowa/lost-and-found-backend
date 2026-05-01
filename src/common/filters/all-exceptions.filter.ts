import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    let httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errorDetails: any = {};

    if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      const response = exception.getResponse();

      if (typeof response === 'string') {
        message = response;
      } else if (typeof response === 'object') {
        const objResponse = response as any;
        message = objResponse.message || 'An error occurred';
        if (objResponse.error) {
          errorDetails.error = objResponse.error;
        }
        if (objResponse.message) {
          errorDetails.message = objResponse.message;
        }
      }
    } else if (exception instanceof Error) {
      message = exception.message;
      errorDetails.stack = process.env.NODE_ENV === 'production' ? undefined : exception.stack;
    }

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      message,
      ...(Object.keys(errorDetails).length > 0 && { details: errorDetails }),
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
