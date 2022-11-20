import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendaController } from './agenda.controller';
import { AgendaSchema } from './agenda.schema';
import { AgendaService } from './agenda.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'agenda', schema: AgendaSchema }])],
  controllers: [AgendaController],
  providers: [AgendaService],
  exports: [AgendaService],
})
export class AgendaModule { }