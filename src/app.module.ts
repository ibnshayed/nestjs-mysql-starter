import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configs';
import { MainModule } from './modules';
import { MySQLModule } from './repository';

@Module({
  imports: [ConfigurationModule, MySQLModule, MainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
