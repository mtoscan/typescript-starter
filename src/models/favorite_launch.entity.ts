import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('favorite_launches')
export class FavoriteLaunch {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number;
  @Column()
  flight_number: number;
}
