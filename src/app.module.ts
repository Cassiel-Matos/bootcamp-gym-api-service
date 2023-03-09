import { Module } from '@nestjs/common';
import { GoogleModule } from './modules/google.module';
import { TrainingModule } from './modules/training.module';

@Module({
  imports: [TrainingModule, GoogleModule],
})
export class AppModule {}
