import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdSchema } from 'schemas/prod.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdModule } from './prod/prod.module';

@Module({
  imports: [
    ProdModule,
    MongooseModule.forRoot('mongodb+srv://Vivek:72NuC07qybp0LpDv@cluster0.adf3vri.mongodb.net/nest_db?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
