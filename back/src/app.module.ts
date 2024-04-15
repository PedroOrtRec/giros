import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProbabilityModule } from './probability/probability.module';

@Module({
  imports: [ProbabilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
