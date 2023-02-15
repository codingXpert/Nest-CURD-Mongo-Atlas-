import { Module } from '@nestjs/common';
import { ProdService } from './prod.service';
import { ProdController } from './prod.controller';

@Module({
  controllers: [ProdController],
  providers: [ProdService]
})
export class ProdModule {}
