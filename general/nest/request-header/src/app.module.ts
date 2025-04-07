import { Module } from '@nestjs/common';
import { WhoamiService } from './whoami/whoami.service';
import { WhoamiController } from './whoami/whoami.controller';

@Module({
  imports: [],
  controllers: [WhoamiController],
  providers: [WhoamiService],
})
export class AppModule {}
