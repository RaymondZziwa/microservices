import { Injectable } from '@nestjs/common';
import { saveReaderDto } from './dto/dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async saveReader(data: saveReaderDto) {
    try {
      await this.prismaService
        .$queryRaw`INSERT INTO reader (email) VALUES (${data.email})`;
      const readers = await this.getAllReaders();
      return {
        HttpCode: 201,
        message: 'Reader saved successfully',
        data: readers.data,
      };
    } catch (error) {
      console.log(error);
      return {
        HttpCode: 400,
        message: 'Error saving reader',
        data: null,
      };
    }
  }

  async getAllReaders() {
    try {
      const readers = await this.prismaService.$queryRaw`SELECT * FROM reader`;

      return {
        HttpCode: 201,
        message: 'Readers fetched successfully',
        data: readers,
      };
    } catch (error) {
      console.log(error);
      return {
        HttpCode: 400,
        message: 'Error while fetching articles',
        data: null,
      };
    }
  }
}
