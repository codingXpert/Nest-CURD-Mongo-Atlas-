import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ProdDocument = Prod & Document; 
@Schema()
export class Prod {
    @ApiProperty()
    @Prop()                  // need not to write this Prop() here , this is an auto generated Prop
    id: string;            //  this Prop() is written here only to display inside swagger 

    @ApiProperty()
    @Prop()
    prod_name: string;

    @ApiProperty()
    @Prop()
    prod_price: number;

    @ApiProperty()
    @Prop({default: Date.now})
    date: Date;

    @ApiProperty()
    @Prop()                   // need not to write this Prop() here , this is an auto generated Prop
    __v: number;             //  this Prop() is written here only to display inside swagger
}
export const ProdSchema = SchemaFactory.createForClass(Prod); 