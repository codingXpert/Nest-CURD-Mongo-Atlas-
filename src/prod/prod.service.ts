import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Prod, ProdDocument } from 'schemas/prod.schema';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';

@Injectable()
export class ProdService {
  constructor(@InjectModel('prod') private readonly userModel:Model<ProdDocument>){}  // 'prod is the name of db or model'
  async createProd(prod: CreateProdDto):Promise<Prod> {
    const newProd = new this.userModel(prod);
    return newProd.save();
  }
// reading the prod collectiom
  findAll() {
     return this.userModel.find({})
     .then((prod) => {return prod})
     .catch((err) => console.log(err)); 
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
}
