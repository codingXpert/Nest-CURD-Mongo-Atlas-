import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdService } from './prod.service';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';
import { Prod } from 'schemas/prod.schema';

@Controller('prod')
export class ProdController {
  constructor(private readonly prodService: ProdService) {}

  @Post()
  createProd(@Body() createProdDto: Prod) {
    return this.prodService.createProd(createProdDto);
  }

  @Get('/all')
  async findAll() {
    return await this.prodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdDto: UpdateProdDto) {
    return this.prodService.update(+id, updateProdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodService.remove(+id);
  }
}
