import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Prod, ProdDocument} from 'schemas/prod.schema';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';

@Injectable()
export class ProdService {
  constructor(@InjectModel('prod') private readonly userModel:Model<ProdDocument>){}  // 'prod is the name of db or model'
  async createProd(prod: CreateProdDto):Promise<Prod> {
    const newProd = new this.userModel(prod);
    return newProd.save();
  }

  // private obj = new Prod();   // creating object or instance of Prod Class
  // private price = this.obj.prod_price;
  // private name = this.obj.prod_name;

// reading the prod collectiom
  findAll() {
     return this.userModel.find({}).exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} prod`;
  }
  async update(id:string , data:UpdateProdDto):Promise<Prod> {
    return await this.userModel.findByIdAndUpdate(id , data , {new:true});
  }

 async remove(id: string) {
    return await this.userModel.findByIdAndRemove(id);
  }

  //Aggrigation
  async aggrigate(){
      const pipeline = [
      {$group: {_id : "$prod_name" }}  ,   // finds all the unique name(stage 1)
      // {$sort: {prod_name:1} },               //1 is used for ascending order while -1 is used for descending order.(stage 2)
      {$limit: 3}                        //shows 3 data in a page (stage 3)
    ]
    console.log(pipeline);
    return this.userModel.aggregate(pipeline).exec(); 
  }
}
