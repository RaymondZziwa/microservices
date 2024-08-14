import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { saveReaderDto } from './dto/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'SAVE_READER' })
  async saveReader(@Payload() data: saveReaderDto) {
    return this.appService.saveReader(data);
  }

  @MessagePattern({ cmd: 'GET_ALL_READERS' })
  async getAllReaders() {
    return this.appService.getAllReaders();
  }
}
