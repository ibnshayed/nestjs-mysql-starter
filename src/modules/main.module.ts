import { Module } from '@nestjs/common';
import { UserModule } from './user';
// import { AuthModule } from './auth';

@Module({
  imports: [UserModule],
})
export class MainModule {}
