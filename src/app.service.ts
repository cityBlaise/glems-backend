/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommandesService } from './commandes/commandes.service';
import command from './entities/command'; 
import { MonServiceService } from './mon-service/mon-service.service';

@Injectable()
export class AppService {
  async getAllCategories( )  {
    return await this.monservice.getAllCategories()
  }
   async addCommand(command: command) {
    return await this.command.addCommand(command)
  }

  async getCommandById(commandId:string){
    return await this.command.getCommandById(commandId)
  }
  
  constructor(private readonly monservice: MonServiceService, private readonly command:CommandesService){}

  getHello(): string {
    return 'Hello World!';
  }

    async getQuery(page: string): Promise<any> {
     const result = await this.monservice.getProducts(Number(page))
     return {key:page, data:result}
  }
  async getNumberItems(): Promise<any> {
    const result = await this.monservice.getNumberOfItems()
    return result
 }

 async getAll(): Promise<any> {
  const result = await this.monservice.getAllProducts()
  return result
}


  async getProductsByCategorie(categorie: string): Promise<any> {
    return await this.monservice.getByCategorie(categorie)
  }
}
