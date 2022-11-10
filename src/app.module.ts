import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormconfig from './config/ormconfig';
import { FavoriteLaunchModules } from './favorite_launch/favorite_launch.module';
import { SpaceXModule } from './spacex/spacex.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...ormconfig }),
    SpaceXModule,
    FavoriteLaunchModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
