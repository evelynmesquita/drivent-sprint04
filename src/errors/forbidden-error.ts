import { ApplicationError } from '@/protocols';

export function forbiddenError(message = 'Outside of the business rules'): ApplicationError {
  return {
    name: 'ForbiddenError',
    message,
  };
}
