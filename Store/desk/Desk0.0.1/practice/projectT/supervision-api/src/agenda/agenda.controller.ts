import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { Agenda } from './agenda.interface';

@Controller('agenda')
export class AgendaController {
    constructor(private readonly agendaService: AgendaService) { }

    @Get()
    async findAll(): Promise<any[]> {
        return await this.agendaService.findAll();
    }
    @Get(':id')
    findName(@Param() params) {
        return this.agendaService.findById(params.id);
    }

    @Put()
    updatInfo(@Body() item: Agenda) {

        return this.agendaService.put(item);

    }

    @Post('/getMyAgenda')
    getMyAgenda(@Body() item: Agenda) {
        return this.agendaService.getMyAgenda(item);
    }

    @Post('/getHistory')
    getHistory(@Body() item: Agenda) {
        return this.agendaService.getHistory(item);
    }



    @Post()
    save(@Body() users: Agenda) {
        this.agendaService.create(users);
        return true;
    }

    @Delete(':id')
    deleteById(@Param() params) {
        return this.agendaService.removeById(params.id);
    }
}
