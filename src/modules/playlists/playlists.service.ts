import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PlayList } from './entities/playlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Song } from '../songs/entities/song.entity';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(PlayList)
    private playListRepository: Repository<PlayList>,

    @InjectRepository(User)
    private userRepository: Repository<PlayList>,

    @InjectRepository(Song)
    private songRepository: Repository<PlayList>,
  ) {}
  async create(createPlaylistDto: CreatePlaylistDto) {
    const playList = new PlayList();
    playList.name = createPlaylistDto.name;

    // const songs = await this.songRepository.findBy({ songs: createPlaylistDto.songs });
    // playList.songs = songs;

    // const user = await this.userRepository.findOneBy({ id: createPlaylistDto.user });
    // playList.user = user;

    return this.playListRepository.save(playList);
  }

  findAll() {
    return `This action returns all playlists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playlist`;
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
