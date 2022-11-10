import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteLaunch } from '../models/favorite_launch.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoriteLaunchService {
  constructor(
    @InjectRepository(FavoriteLaunch)
    private favoriteLaunchRepository: Repository<FavoriteLaunch>,
  ) {}

  async saveFavoriteLaunch(
    userId: number,
    flightNumber: number,
  ): Promise<boolean> {
    try {
      await this.favoriteLaunchRepository.save({
        user_id: userId,
        flight_number: flightNumber,
      });
      return true;
    } catch (error) {
      console.log('Error Saving to DB');
      return false;
    }
  }
}
