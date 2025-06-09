import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';

@Injectable()
export class SongsService {
  constructor(private readonly songsRepository: Repository<Song>) {}

  create(createSongDto: CreateSongDto) {
    console.log('createSongDto', createSongDto);
    return 'This action adds a new song';
  }

  findAll() {
    return `This action returns all songs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    console.log('updateSongDto', updateSongDto);
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
