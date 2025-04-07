import { Injectable } from '@nestjs/common';
import { Whoami } from './interfaces/whoami.interface';
import { Request } from 'express';

@Injectable()
export class WhoamiService {
  getInfo(request: Request): Whoami {
    const ip = request.ip!;
    const language = request.headers['accept-language']!;
    const software = request.headers['user-agent']!;

    return { ipaddress: ip, language: language, software: software };
  }
}
