import { Module } from '@nestjs/common';
import { TrainingController } from 'src/controllers/training.controller';
import { PrismaService } from 'src/database/prisma.service';
import { TrainingService } from 'src/services/training.service';

@Module({
  imports: [],
  controllers: [TrainingController],
  providers: [TrainingService, PrismaService],
})
export class TrainingModule {}
