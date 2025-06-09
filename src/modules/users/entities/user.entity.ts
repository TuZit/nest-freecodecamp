import { PlayList } from 'src/modules/playlists/entities/playlist.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  /**
   * A user can create many playLists
   */
  @OneToMany(() => PlayList, (playList) => playList.user)
  playLists: PlayList;
}
