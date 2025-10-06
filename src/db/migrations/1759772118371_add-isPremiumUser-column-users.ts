import { MigrationBuilder } from 'node-pg-migrate';

export const up = (pgm: MigrationBuilder) => {
  pgm.addColumns('users', {
    isPremiumUser: { type: 'boolean', notNull: true, default: false },
  });
};