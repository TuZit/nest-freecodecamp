import { Module } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { PlaylistsController } from './playlists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayList } from './entities/playlist.entity';
import { Song } from '../songs/entities/song.entity';
import { User } from '../users/entities/user.entity';

@Module({
  controllers: [PlaylistsController],
  providers: [PlaylistsService],
  imports: [TypeOrmModule.forFeature([PlayList, Song, User])],
})
export class PlaylistsModule {}
