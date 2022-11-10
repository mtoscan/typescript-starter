import { MigrationInterface, QueryRunner } from 'typeorm';

export class favoriteLaunches1668108560097 implements MigrationInterface {
  name = 'favoriteLaunches1668108560097';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`favorite_launches\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`flight_number\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`favorite_launches\``);
  }
}
