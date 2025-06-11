import { Artist } from 'src/modules/artist/entities/artist.entity';
import { PlayList } from 'src/modules/playlists/entities/playlist.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('date')
  releasedDate: Date;

  @Column('time')
  duration: Date;

  @Column('text')
  lyrics: string;

  @ManyToMany(() => Artist, (artist) => artist.songs, { cascade: true })
  @JoinTable({ name: 'songs_artists' })
  artists: Artist[];

  // Many songs can belong to playlist for each unique user
  @ManyToOne(() => PlayList, (pl) => pl.songs)
  playLists: PlayList;
}
