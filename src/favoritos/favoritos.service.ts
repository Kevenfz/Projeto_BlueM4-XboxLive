import { Injectable } from '@nestjs/common';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';

@Injectable()
export class FavoritosService {
  create(createFavoritoDto: CreateFavoritoDto) {
    return 'This action adds a new favorito';
  }

  findAll() {
    return `This action returns all favoritos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favorito`;
  }
}
