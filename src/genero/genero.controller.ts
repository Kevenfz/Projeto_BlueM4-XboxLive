import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from './entities/genero.entities';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@ApiTags('genero')
@Controller('genero')
export class GeneroController {
  constructor(private generoService: GeneroService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os generos' })
  findAll() {
    return this.generoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar generos pelo seu ID' })
  findById(@Param('id') id: string): Promise<Genero> {
    return this.generoService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um genero' })
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.create(createGeneroDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um genero pelo seu ID' })
  update(
    @Param('id') id: string,
    @Body() updateGeneroDto: UpdateGeneroDto,
  ): Promise<Genero> {
    return this.generoService.update(id, updateGeneroDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar um genero pelo seu ID' })
  delete(@Param('id') id: string) {
    this.generoService.delete(id);
  }
}
