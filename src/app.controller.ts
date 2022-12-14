/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service'; 
import Command from './entities/command';
// import { v4 as uuidv4 } from 'uuid';

@Controller()
export class AppController{
  constructor(private readonly appService: AppService) {}
  // async onModuleInit() {
  //   const commandId=uuidv4()
  //     const command ={
  //     commandId:commandId,
  //     date: new Date().toString(),
  //     products:['1','3','4'],
  //     status:'pending'
  // }
  //   console.log ("add commande "+await this.appService.addCommand(command)) 
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products/amount')
  async getAmount( ): Promise<any> { 
   return this.appService.getNumberItems()
  }

  @Get('products')
  async getAll( ): Promise<any> { 
   return this.appService.getAll()
  }

  @Get('products/categories/')
  async getAllCategorie( ): Promise<any> {
    console.log(`appController.get all categories called with key `)
   return this.appService.getAllCategories();
  }
  
  @Get('products/:page')
  async getQuery(@Param('page') key: string): Promise<any> {
    console.log(`appController.getQuery called with key ${key}`)
   return this.appService.getQuery(key);
  }

  @Get('products/categorie/:cat')
  async getProductsByCategorie(@Param('cat') key: string): Promise<any> {
    console.log(`appController.getProductsByCategorie called with key ${key}`)
   return this.appService.getProductsByCategorie(key);
  }

  @Get('commands/:commandId')
  async getCommandById(@Param('commandId') key: string): Promise<any> {
    console.log(`appController.getCommandById called with key ${key}`)
   return this.appService.getCommandById(key);
  }

  
  @Post('commander') 
  async postCommand(@Body() command: Command) {
    try {
      console.log(`got command ${JSON.stringify(command, null, 3)}`);
      const c = await this.appService.addCommand(command);
      return c;
    } catch (error) {
      return error;
    }
  }
}
