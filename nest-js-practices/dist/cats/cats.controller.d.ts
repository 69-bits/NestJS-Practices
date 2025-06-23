import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<import("./entities/cat.entity").Cat>;
    findAll(): Promise<import("./entities/cat.entity").Cat[]>;
    findOne(id: string): Promise<import("./entities/cat.entity").Cat | null>;
    update(id: string, updateCatDto: UpdateCatDto): Promise<void>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
