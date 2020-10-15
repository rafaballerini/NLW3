import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602699958031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //realiza alterações no banco de dados (criar tabela, campo, deletar algo)
        await queryRunner.createTable(new Table({
            name: "orphanages",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'verchar', 
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'verchar', 
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //desfaz o que foi feito no método up
        await queryRunner.dropTable('orphanages');
    }
}
