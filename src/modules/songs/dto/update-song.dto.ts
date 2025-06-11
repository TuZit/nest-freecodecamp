import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto';
import { IsNumber } from 'class-validator';

export class UpdateSongDto extends PartialType(CreateSongDto) {
  @IsNumber({}, { each: true })
  readonly artists;
}
