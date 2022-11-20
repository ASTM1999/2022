import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'users/users.module';
import { AgendaModule } from 'agenda/users.module';
@Module({
  // MongooseModule.forRoot('mongodb://mongo:27017')
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/supervision')
    , UsersModule
    , AgendaModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }