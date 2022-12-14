/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product{
 
  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  productCategorie: string;

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  colors: string[];

  @Prop({ required: true })
  sizes: string[];

  
  @Prop({ required: true })
  images: string[];
 
}

export const ProductSchema = SchemaFactory.createForClass(Product);