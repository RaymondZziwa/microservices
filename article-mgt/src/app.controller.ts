import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { deleteArticleDto, saveArticleDto } from './dto/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'SAVE_ARTICLE' })
  async saveArticle(@Payload() data: saveArticleDto) {
    return this.appService.saveArticle(data);
  }

  @MessagePattern({ cmd: 'GET_ALL_ARTICLES' })
  async getAllArticles() {
    return this.appService.getAllArticles();
  }

  @MessagePattern({ cmd: 'DELETE_ARTICLE' })
  async deleteArticle(@Payload() data: deleteArticleDto) {
    return this.appService.deleteArticle(data);
  }
}
