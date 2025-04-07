import { Controller, Get, Req } from '@nestjs/common';
import { WhoamiService } from './whoami.service';
import { Whoami } from './interfaces/whoami.interface';
import { Request } from 'express';

@Controller('api')
export class WhoamiController {
  constructor(private whoamiService: WhoamiService) {}

  @Get('whoami')
  whoami(@Req() request: Request): Whoami {
    return this.whoamiService.getInfo(request);
  }
}
