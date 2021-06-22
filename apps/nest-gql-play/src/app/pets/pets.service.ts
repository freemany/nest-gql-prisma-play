import { Injectable } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pets.entity';
import { PetService } from './services/petService';

@Injectable()
export default class PetsService {
  constructor(private petService: PetService) {}

  async findAll(): Promise<Pet[]> {
    return this.petService.getAll();
  }

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    return this.petService.createPet({
      data: {
        name: createPetInput.name,
        type: createPetInput.type,
      },
    });
  }
}
