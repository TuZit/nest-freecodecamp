import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { connection } from 'src/common/constants/connection';

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    {
      provide: SongsService,
      useValue: connection,
    },
  ],
})
export class SongsModule {}
