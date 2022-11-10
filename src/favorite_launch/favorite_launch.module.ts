import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteLaunch } from '../models/favorite_launch.entity';
import { FavoriteLaunchController } from './favorite_launch.controller';
import { FavoriteLaunchService } from './favorite_launch.service';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteLaunch])],
  controllers: [FavoriteLaunchController],
  providers: [FavoriteLaunchService],
})
export class FavoriteLaunchModules {}
