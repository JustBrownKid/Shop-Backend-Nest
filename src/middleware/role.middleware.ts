import { Injectable, NestMiddleware, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export function RoleMiddleware(accessRole?: string[]) {
  @Injectable()
  class Middleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) {
        throw new UnauthorizedException('No token provided');
      }
      try {
        const secret = process.env.JWT_SECRET || 'yourSecretKey';
        const decoded: any = jwt.verify(token, secret);
        req.user = decoded;

        if (accessRole && !accessRole.includes(req.user.role)) {
          throw new ForbiddenException('You do not have permission to access this resource');
        }
      } catch (err) {
        throw new UnauthorizedException('Invalid or expired token');
      }
      next();
    }
  }
  return Middleware;
}
