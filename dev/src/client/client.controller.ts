import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(
    private clientService: ClientService,
    @Inject('CLIENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  async all() {
    const todos = await this.clientService.all();
    this.client.emit('all', todos);
    return todos;
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.clientService.findById(id);
  }

  @Post()
  async create(@Body() data: any) {
    const clientAdd = await this.clientService.create(data);
    this.client.emit('add_client', clientAdd);
    console.log({ Enviando: clientAdd });
    return clientAdd;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: any) {
    const clientUp = await this.clientService.update(id, data);
    this.client.emit('update_client', clientUp);
    return clientUp;
  }
}
