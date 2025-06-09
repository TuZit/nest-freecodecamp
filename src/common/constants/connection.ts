export const connection: DBConnection = {
  DB: 'mysql',
  DB_NAME: 'nestjs',
  CONNECTION_STRING: 'CONNECTION_STRING',
};

export type DBConnection = {
  DB: string;
  DB_NAME: string;
  CONNECTION_STRING: string;
};
