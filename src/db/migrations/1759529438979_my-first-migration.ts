import { MigrationBuilder } from 'node-pg-migrate';

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable('users', {
    id: 'id',
    username: { type: 'varchar(1000)', notNull: true },
    email: { type: 'varchar(1000)', notNull: true, unique: true },
    passwordHash: { type: 'varchar(1000)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },

  });

};

export async function down(pgm: MigrationBuilder): Promise<void> {}