import { Body, Controller, Post } from '@nestjs/common';
import { FavoriteLaunchDto } from './favorite_launch.dto';
import { FavoriteLaunchService } from './favorite_launch.service';

@Controller('favorite-launch')
export class FavoriteLaunchController {
  constructor(private favoriteLaunchService: FavoriteLaunchService) {}

  @Post() saveFavoriteLaunch(@Body() favoriteLaunchDto: FavoriteLaunchDto) {
    return this.favoriteLaunchService.saveFavoriteLaunch(
      favoriteLaunchDto.userId,
      favoriteLaunchDto.flightNumber,
    );
  }
}
