import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { User } from 'src/repository';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   return this.usersService.create(createUserDto);
  // }

  @Get('find/all')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('find/one/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete('delete/one/:id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
