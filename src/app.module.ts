import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdModule } from './prod/prod.module';

@Module({
  imports: [ProdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
