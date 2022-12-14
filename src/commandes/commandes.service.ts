/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schemas/product.schema';
import { Commande } from '../schemas/commandes.schema';
import { Model } from 'mongoose';
import Command from 'src/entities/command';
@Injectable()
export class CommandesService implements OnModuleInit{

    constructor(
        private httpService: HttpService,
        @InjectModel('products') private productModel: Model<Product>,
        @InjectModel('commandes') private commandModel: Model<Commande>
    ){}

    async addCommand(command:Command){
    
        let a;
         await this.commandModel
        .findOneAndUpdate(
            {commandId:command.commandId},
            command,
            {upsert:true}
        ).exec() 
        return 200
    }

    async onModuleInit(){ 
        // console.log('la response '+ (await this.addCommand([1,2,3])))
    }

    async getCommandById(commandId:string){
        const command:any = await  this.commandModel.findOne(
            {commandId:commandId}
        ).exec()
        
        const products= await this.productModel.find().where('productId').in(command.products).exec()
        return {
            command:command,
            products:products
        }
    }
}
