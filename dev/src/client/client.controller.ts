import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  async all() {
    return await this.clientService.all();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.clientService.findById(id);
  }

  @Post()
  async create(@Body() data: any) {
    return await this.clientService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: any) {
    return await this.clientService.update(id, data);
  }
}
