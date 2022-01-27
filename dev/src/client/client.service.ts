import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async all() {
    return this.clientRepository.find();
  }

  async findById(id: number) {
    return this.clientRepository.findOneOrFail(id);
  }

  async create(data) {
    return this.clientRepository.save(data);
  }

  async update(id: number, data) {
    return this.clientRepository.update(id, data);
  }
}
