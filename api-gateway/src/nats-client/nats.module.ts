import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://nats-server:4222'],
          //servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],

  exports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          //servers: ['nats://localhost:4222'],
          servers: ['nats://nats-server:4222'],
        },
      },
    ]),
  ],
})
export class NatsClientModule {}
