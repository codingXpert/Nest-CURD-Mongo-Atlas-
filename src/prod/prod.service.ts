import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Prod, ProdDocument } from 'schemas/prod.schema';

@Injectable()
export class ProdService {
  constructor(@InjectModel('prod') private readonly userModel:Model<ProdDocument>){}  // 'prod is the name of db or model'
  async createProd(prod: Prod):Promise<Prod> {
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

  update(id: number, updateProdDto) {
    return `This action updates a #${id} prod`;
  }

  remove(id: number) {
    return `This action removes a #${id} prod`;
  }
}
