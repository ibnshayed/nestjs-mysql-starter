/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MySQLConfiguration } from './db';
import { EnvConfiguration } from './env';
import { JwtConfiguration } from './jwt';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration, MySQLConfiguration, JwtConfiguration],
    }),
  ],
})
export class ConfigurationModule {}
