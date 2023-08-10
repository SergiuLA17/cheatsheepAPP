import { Module } from '@nestjs/common';
import { NestJsService } from './nest-js.service';
import { NestJsController } from './nest-js.controller';

@Module({
  providers: [NestJsService],
  controllers: [NestJsController]
})
export class NestJsModule {}
