import { Module } from '@nestjs/common';
import { ProdService } from './prod.service';
import { ProdController } from './prod.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Prod, ProdSchema } from 'schemas/prod.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'prod' , schema:ProdSchema}])],
  controllers: [ProdController],
  providers: [ProdService]
})
export class ProdModule {}
