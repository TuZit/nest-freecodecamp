import { Exclude } from 'class-transformer';
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

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  /**
   * A user can create many playLists
   */
  @OneToMany(() => PlayList, (playList) => playList.user)
  playLists: PlayList;

  @Column()
  phone: string;
}
