import { Injectable } from '@nestjs/common';
import { Pet } from '../pets.entity';
import { PrismaService } from './prismaService';

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.pet.findMany();
  }

  async createPet(pet) {
    return this.prisma.pet.create(pet);
  }
}
