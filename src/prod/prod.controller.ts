import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdService } from './prod.service';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';
import { Prod } from 'schemas/prod.schema';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse } from '@nestjs/swagger/dist';

@ApiTags('Prod')
@Controller('prod')
export class ProdController {
  constructor(private readonly prodService: ProdService) {}

  @Post()
  @ApiCreatedResponse({type: Prod})
  createProd(@Body() createProdDto: CreateProdDto) {
    return this.prodService.createProd(createProdDto);
  }

  @Get('/all')
  @ApiCreatedResponse({type: [Prod]})
  async findAll() {
    return await this.prodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({type: CreateProdDto})
  update(@Param('id') id: string, @Body() updateProdDto: UpdateProdDto):Promise<Prod> {
    return this.prodService.update(id , updateProdDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({type: Prod})
  remove(@Param('id') id: string) {
    return this.prodService.remove(id);
  }

  //Aggrigation

  @Get()
  async aggrigate(){
    return await this.prodService.aggrigate();
  }
}
