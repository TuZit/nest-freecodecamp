import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveUserPhone1749742784453 implements MigrationInterface {
    name = 'RemoveUserPhone1749742784453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`songs\` DROP COLUMN \`huhu\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`artists\` DROP FOREIGN KEY \`FK_f7bd9114dc2849a90d39512911b\``);
        await queryRunner.query(`ALTER TABLE \`artists\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`songs\` DROP FOREIGN KEY \`FK_433b42a0c9d594c82d853be48fa\``);
        await queryRunner.query(`ALTER TABLE \`songs\` CHANGE \`playListsId\` \`playListsId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`playlist\` DROP FOREIGN KEY \`FK_92ca9b9b5394093adb6e5f55c4b\``);
        await queryRunner.query(`ALTER TABLE \`playlist\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`artists\` ADD CONSTRAINT \`FK_f7bd9114dc2849a90d39512911b\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`songs\` ADD CONSTRAINT \`FK_433b42a0c9d594c82d853be48fa\` FOREIGN KEY (\`playListsId\`) REFERENCES \`playlist\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`playlist\` ADD CONSTRAINT \`FK_92ca9b9b5394093adb6e5f55c4b\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`playlist\` DROP FOREIGN KEY \`FK_92ca9b9b5394093adb6e5f55c4b\``);
        await queryRunner.query(`ALTER TABLE \`songs\` DROP FOREIGN KEY \`FK_433b42a0c9d594c82d853be48fa\``);
        await queryRunner.query(`ALTER TABLE \`artists\` DROP FOREIGN KEY \`FK_f7bd9114dc2849a90d39512911b\``);
        await queryRunner.query(`ALTER TABLE \`playlist\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`playlist\` ADD CONSTRAINT \`FK_92ca9b9b5394093adb6e5f55c4b\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`songs\` CHANGE \`playListsId\` \`playListsId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`songs\` ADD CONSTRAINT \`FK_433b42a0c9d594c82d853be48fa\` FOREIGN KEY (\`playListsId\`) REFERENCES \`playlist\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`artists\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`artists\` ADD CONSTRAINT \`FK_f7bd9114dc2849a90d39512911b\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`songs\` ADD \`huhu\` text NOT NULL`);
    }

}
