import { Song } from 'src/modules/songs/entities/song.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('playlist')
export class PlayList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Each Playlist will have multiple songs
  @OneToMany(() => Song, (song) => song.playLists)
  songs: Song[];

  // Many Playlist can belong to a single unique user
  @ManyToOne(() => User, (user) => user.playLists)
  user: User;
}
