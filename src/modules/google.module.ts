import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/google.controller';
import { GoogleService } from 'src/services/google.service';
import { GoogleStrategy } from 'src/google.strategy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [GoogleService, GoogleStrategy],
})
export class GoogleModule {}
