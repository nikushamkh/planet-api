import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanetModule } from './planet/planet.module';

@Module({
  imports: [PlanetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
