import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DevConfigServices } from './common/providers/DevConfigServices';
import { ArtistModule } from './modules/artist/artist.module';
import { AuthModule } from './modules/auth/auth.module';
import { PlaylistsModule } from './modules/playlists/playlists.module';
import { SongsController } from './modules/songs/songs.controller';
import { SongsModule } from './modules/songs/songs.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    SongsModule,
    PlaylistsModule,
    UsersModule,
    // TypeOrmModule.forRoot({ ...dataSourceOptions, entities: [User, Song, PlayList, Artist] }),
    TypeOrmModule.forRoot(dataSourceOptions),
    ArtistModule,
    AuthModule,
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
