import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SpaceXService } from './spacex.service';
import { SpaceXController } from './spcacex.controller';

@Module({
  imports: [HttpModule],
  controllers: [SpaceXController],
  providers: [SpaceXService],
})
export class SpaceXModule {}
