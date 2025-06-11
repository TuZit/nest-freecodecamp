import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto';
import { IsArray, IsDateString, IsMilitaryTime, IsNumber, IsOptional, IsString } from 'class-validator';
import { Artist } from 'src/modules/artist/entities/artist.entity';

export class UpdateSongDto extends PartialType(CreateSongDto) {
  @IsString()
  @IsOptional()
  readonly title;

  @IsDateString()
  @IsOptional()
  readonly releaseDate: Date;

  @IsMilitaryTime()
  @IsOptional()
  readonly duration: Date;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  readonly artists: Artist[];
}
