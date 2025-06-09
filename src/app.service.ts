import { DevConfigServices } from './common/providers/DevConfigServices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private DevConfigServices: DevConfigServices) {}
  getHello(): string {
    return 'Hello World!' + `${this.DevConfigServices.getDBHost()}`;
  }
}
