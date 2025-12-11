import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildrenService {
  constructor(private readonly db: PrismaService) {}

  create(createChildDto: CreateChildDto) {
    return this.db.child.create({
      data: createChildDto,
    });
  }

  findAll() {
    return this.db.child.findMany();
  }

  async findOne(id: number) {
    const found = await this.db.child.findUnique({
      where: { id }
    });
    if (found === null) {
      throw new NotFoundException(`Child with ID ${id} not found`);
    }
    return found;
  }

  update(id: number, updateChildDto: UpdateChildDto) {
    return this.db.child.update({
      where: { id },
      data: updateChildDto,
    });
  }

  remove(id: number) {
    return this.db.child.delete({
      where: { id },
    });
  }

  async addToyToChild(childId: number, toyId: number) {
    const child = await this.db.child.findUnique({
      where: { id: childId },
    });

    if (!child) {
      throw new NotFoundException(`Child with ID ${childId} not found`);
    }

    if (!child.hasBeenGood) {
      throw new BadRequestException('Cannot assign toy to a child who has not been good');
    }

    const toy = await this.db.toy.findUnique({
      where: { id: toyId },
    });

    if (!toy) {
      throw new NotFoundException(`Toy with ID ${toyId} not found`);
    }

    return this.db.toy.update({
      where: { id: toyId },
      data: { childId },
    });
  }

  async removeToyFromChild(childId: number, toyId: number) {
    const child = await this.db.child.findUnique({
      where: { id: childId },
    });

    if (!child) {
      throw new NotFoundException(`Child with ID ${childId} not found`);
    }

    const toy = await this.db.toy.findUnique({
      where: { id: toyId },
    });

    if (!toy) {
      throw new NotFoundException(`Toy with ID ${toyId} not found`);
    }

    return this.db.toy.update({
      where: { id: toyId },
      data: { childId: null },
    });
  }
}
