/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; 
import { ProductSchema } from './schemas/product.schema';
import { CommandeSchema } from './schemas/commandes.schema';
import { MonServiceService } from './mon-service/mon-service.service';
import { HttpModule } from '@nestjs/axios';
import { CommandesService } from './commandes/commandes.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://glems:ZiNZX5EnQcPMLrQF@glems.ieebv3u.mongodb.net/?retryWrites=true&w=majority'
      ),
    MongooseModule.forFeature([
      {
        name: 'products',
        schema: ProductSchema,
      },{
        name: 'commandes',
        schema: CommandeSchema,
      }
    ]),
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService, MonServiceService, CommandesService],
})

export class AppModule {}
