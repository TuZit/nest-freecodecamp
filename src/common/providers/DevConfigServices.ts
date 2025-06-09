import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigServices {
  DB_HOST = 'localhost';
  getDBHost() {
    return this.DB_HOST;
  }
}
