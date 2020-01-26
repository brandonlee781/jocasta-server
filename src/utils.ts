import { verify } from 'jsonwebtoken';
import { Context } from './context';

export const APP_SECRET = 'appsecret321';

interface Token {
  userId: string;
}

export function getUserId(context: Context): string | null {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, APP_SECRET) as Token;
    return verifiedToken && verifiedToken.userId;
  }
  return null;
}

export function titleCase(str: string): string {
  const string = str.toLowerCase().split(' ');
  for (let i = 0; i < string.length; i += 1) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join(' ');
}
