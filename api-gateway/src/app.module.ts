import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NatsClientModule } from './nats-client/nats.module';

@Module({
  imports: [NatsClientModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
