import { Injectable } from '@nestjs/common';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';

@Injectable()
export class ProdService {
  create(createProdDto: CreateProdDto) {
    return 'This action adds a new prod';
  }

  findAll() {
    return `This action returns all prod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prod`;
  }

  update(id: number, updateProdDto: UpdateProdDto) {
    return `This action updates a #${id} prod`;
  }

  remove(id: number) {
    return `This action removes a #${id} prod`;
  }
}
