import { Breed } from "src/breeds/entities/breed.entity";
import { 
    Column, 
    Entity,
    DeleteDateColumn,
    PrimaryGeneratedColumn, 
    ManyToOne
} from "typeorm";

@Entity()
export class Cat {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Breed, (breed) => breed.id, {
    eager:true, //En un find one este trae todas las razas sin necesidad de solamente recibir ID
  })
  breed: Breed;

  
}
