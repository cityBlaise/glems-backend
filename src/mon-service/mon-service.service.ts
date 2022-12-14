/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../schemas/product.schema';
import { Commande } from '../schemas/commandes.schema';
@Injectable()
export class MonServiceService implements OnModuleInit {
    constructor(
    private httpService: HttpService,
    @InjectModel('products') private productModel: Model<Product>,
    @InjectModel('commandes') private commandModel: Model<Commande>
    ){}
    product:any[]=[
        {
          amount:2,
          productId: uuidv4(),
          productCategorie:'Skirt',
          productName:'Chemise city xyz',
          sizes:['m','l','xl'],
          price:4500,
          colors:['black','white'],
          images:[
            './assets/images/products/shirt-1.webp',
            './assets/images/products/shirt-2.webp'
          ]
        },
        {
          amount:2,
          productId: uuidv4(),
          productCategorie:'body',
          productName:'body sara vkt',
          sizes:['s','xs'],
          price:1000,
          colors:['brown','chocolate'],
          images:[
            './assets/images/products/jacket-2.webp',
            './assets/images/products/jacket-1.webp'
            ]
          },
        {
          amount:2,
          productId: uuidv4(),
          productCategorie:'robe',
          productName:'robe ranma 1/4',
          sizes:['m','l'],
          price:4500,
          colors:['chocolate'],
          images:[
            './assets/images/products/jacket-5.webp',
            './assets/images/products/jacket-6.webp'
            ]
          },
        {
          amount:2,
          productId: uuidv4(),
          productCategorie:'jupe',
          productName:'une jupe',
          sizes:['m','l'],
          price:2500,
          colors:['black'],
          images:[
            './assets/images/products/clothes-4.webp',
            './assets/images/products/clothes-3.webp'
            ]
          },
        {
          amount:2,
          productId: uuidv4(),
          productCategorie:'blazer',
          productName:'blazer jeans',
          sizes:['m'],
          price:3500,
          colors:['blue','gray'],
          images:[
            './assets/images/products/jacket-4.webp',
            './assets/images/products/jacket-3.webp'
            ]
          },
        {
          amount:2,
          productId: uuidv4(),
          productCategorie:'watch',
          productName:'apple wathc',
          sizes:['2\''],
          price:22500,
          colors:['black','blue'],
          images:[
            './assets/images/products/watch-1.webp',
            './assets/images/products/watch-2.webp'
            ]
          },
        {
          amount:2,
          productId: uuidv4(),
          productCategorie:'watch',
          productName:'a wathc',
          sizes:['3\''],
          price:42500,
          colors:['gold' ],
          images:[
            './assets/images/products/watch-3.webp',
            './assets/images/products/watch-4.webp'
            ]
          },
        {
          amount:2,
          productId: uuidv4(),
          productCategorie:'shoes',
          productName:'a shoes',
          sizes:['43','44'],
          price:12500,
          colors:[ 'brown'],
          images:[
            './assets/images/products/shoe-1.webp',
            './assets/images/products/shoe-1_1.webp'
            ]
          },
        {
          amount:2,
          productId: uuidv4(),
          productCategorie:'short',
          productName:'a short',
          sizes:['s','m'],
          price:22500,
          colors:['pink' ],
          images:[
            './assets/images/products/shorts-1.webp',
            './assets/images/products/shorts-2.webp'
            ]
          },
        {
          amount:2,
          productId:uuidv4(),
          productCategorie:'shoes',
          productName:'a shoes',
          sizes:['43','44'],
          price:22000,
          colors:['chocolate'],
          images:[
            './assets/images/products/shoe-2_1.webp',
            './assets/images/products/shoe-2.webp'
            ]
          },
          {
            amount:2,
            productId:uuidv4(),
            productCategorie:'watch',
            productName:'a watch',
            sizes:['2\''],
            price:32000,
            colors:['black','pink'],
            images:[
              './assets/images/products/11.webp',
              './assets/images/products/12.webp'
              ]
            },
            {
              amount:2,
              productId:uuidv4(),
              productCategorie:'shirt',
              productName:'a shirt',
              sizes:['M'],
              price:3000,
              colors:['#800020','gray'],
              images:[
                './assets/images/products/13.webp',
                './assets/images/products/14.webp'
                ]
            },
            {
              amount:2,
              productId:uuidv4(),
              productCategorie:'shoes',
              productName:'a shoe',
              sizes:['39','40','41'],
              price:12000,
              colors:['#ffb6c1','lightblue '],
              images:[
                './assets/images/products/15.webp',
                './assets/images/products/16-2.webp',
                './assets/images/products/16.webp'
                ]
            },
            {
              amount:2,
              productId:uuidv4(),
              productCategorie:'shoes',
              productName:'a shoe',
              sizes:['39','40','41'],
              price:12000,
              colors:['#e3d1d1'],
              images:[
                './assets/images/products/17.webp',
                './assets/images/products/18.webp'
                ]
            },
            {
              amount:2,
              productId:uuidv4(),
              productCategorie:'shoes',
              productName:'a shoe',
              sizes:['39','40','41'],
              price:10000,
              colors:['#fff'],
              images:[
                './assets/images/products/19.webp',
                './assets/images/products/20.webp'
                ]
            },
            {
              amount:2,
              productId:uuidv4(),
              productCategorie:'shoes',
              productName:'a shoe',
              sizes:['39','40','41'],
              price:19000,
              colors:['#000'],
              images:[
                './assets/images/products/21.webp',
                './assets/images/products/22.webp'
                ]
            },
            {
              amount:2,
              productId:uuidv4(),
              productCategorie:'jacket',
              productName:'a jacket',
              sizes:['M','L'],
              price:10000,
              colors:['#603b31','#5d4937'],
              images:[
                './assets/images/products/23.webp',
                './assets/images/products/24.webp'
                ]
            } 
      
    ]

    onModuleInit() {
        // this.productModel.collection.drop()
    //    this.productModel.find({}
             
    //     ).where('blockId').in(['city']).exec().then(resp=>console.log(JSON.stringify(resp)))
    // sort({_id:1}).limit(1).skip(0).exec().then(resp=>console.log(JSON.stringify(resp)))

        this.commandModel.estimatedDocumentCount().then(res=>console.log("number "+JSON.stringify(res)))
        // this.productModel.insertMany(
        //     this.product
        //          ).then(res=>{console.log(res)})
    }

    async getProducts(page:number){
        return this.productModel
        .find().sort({productId:1}).limit(10).skip((page-1)*10).exec()
    }

     async getAllProducts(){
        return this.productModel
        .find().sort({productId:1}).exec()
    }

    async getNumberOfItems( ){
        return await this.productModel.estimatedDocumentCount()
    }

    async getByCategorie(categorie:string){
        return await this.productModel.find({}).where('productCategorie').in([categorie]).exec()
    }
     
    async getAllCategories( ){
      return await this.productModel.aggregate(
        [
        {
          $group:{_id:"$productCategorie",count:{$sum:1}}
        }
      ]).exec()

    }
  }

