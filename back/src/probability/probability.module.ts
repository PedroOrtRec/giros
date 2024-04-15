import { Module } from '@nestjs/common';
import { ThrowsService } from './throws/throws.service';

@Module({
  providers: [ThrowsService]
})
export class ProbabilityModule {}
