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

  /*
  I have refactored the artists column. I don't need to store it as an array of strings. 
  This time we need to add @ManyToMany relation
  The firstargument specifies the relation with target entity in our case it is an Artist.
  The second argument specifies the inverse side of the relation.
  We have songs property in Artist Entity.
  cascade: boolean I ("insert" | "update")! 
  If set to true, the related object will be inserted and updated in the database. 
  You can also specify an array of cascade options.

  @JoinTable is required for @ManyToMany relations. I have also changed the name of JoinTable. 
  It will created a new table in the database with songs_artists.
  This joinedtable will have the primary key of songs and artists table as a foreign key
*/
  @ManyToMany(() => Artist, (artist) => artist.songs, { cascade: true })
  @JoinTable({ name: 'songs_artists' })
  artists: Artist[];

  // Many songs can belong to playlist for each unique user
  @ManyToOne(() => PlayList, (pl) => pl.songs)
  playLists: PlayList;
}
