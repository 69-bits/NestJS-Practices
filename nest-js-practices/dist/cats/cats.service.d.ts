import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';
export declare class CatsService {
    private readonly catRepository;
    private readonly breedRepository;
    constructor(catRepository: Repository<Cat>, breedRepository: Repository<Breed>);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
    findOne(id: number): Promise<Cat | null>;
    update(id: number, updateCatDto: UpdateCatDto): Promise<void>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
