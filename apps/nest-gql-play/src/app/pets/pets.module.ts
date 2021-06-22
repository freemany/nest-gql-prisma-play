import { Module } from '@nestjs/common';
import PetsService from './pets.service';
import { PetService } from './services/petService';
import { PetsResolver } from './pets.resolver';
import { PrismaService } from './services/prismaService';

@Module({
  providers: [PetsService, PetService, PetsResolver, PrismaService],
})
export class PetsModule {}
