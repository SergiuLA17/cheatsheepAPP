import { Module } from '@nestjs/common';
import { KubernatesController } from './kubernates.controller';
import { KubernatesService } from './kubernates.service';

@Module({
  controllers: [KubernatesController],
  providers: [KubernatesService],
})
export class KubernatesModule {}
