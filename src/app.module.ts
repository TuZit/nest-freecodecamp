import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsModule } from './modules/songs/songs.module';
import { SongsController } from './modules/songs/songs.controller';
import { DevConfigServices } from './common/providers/DevConfigServices';
import { PlaylistsModule } from './modules/playlists/playlists.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/entities/user.entity';
import { Song } from './modules/songs/entities/song.entity';
import { PlayList } from './modules/playlists/entities/playlist.entity';

@Module({
  imports: [
    SongsModule,
    PlaylistsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [User, Song, PlayList],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: DevConfigServices,
      useClass: DevConfigServices,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs');
    consumer.apply(LoggerMiddleware).forRoutes(SongsController, { path: 'songs', method: RequestMethod.POST });
  }
}
