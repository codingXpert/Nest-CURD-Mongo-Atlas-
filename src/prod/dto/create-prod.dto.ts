import { ApiProperty } from "@nestjs/swagger";

export class CreateProdDto {

    @ApiProperty({
        description:'The name of the product',
        example:'milk'
    })
    prod_name:string;

    @ApiProperty({
        description:'The price of the product',
        example:'40'
    })
    prod_price:number;
}
