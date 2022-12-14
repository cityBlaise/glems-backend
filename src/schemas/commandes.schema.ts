/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
@Schema()
export class Commande{ 

  @Prop({ required: true })
  commandId: string;

  @Prop({ required: true })
  date: string; 
 
  @Prop({ required: true})
  products: number[]; 

  @Prop({ required: true})
  status: string; 
 
}

export const CommandeSchema = SchemaFactory.createForClass(Commande);