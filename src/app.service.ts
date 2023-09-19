import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    throw new Error('Method not implemented.');
  }
  getTeste(): string {
    return 'Hello worlds!';
  }
  getAna(): string {
    return 'Bem vindo Ana!';
  }
  findById(id: string): string {
    return `Ana cadastrada com id: ${id}`;
  }
  async getProducts() {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  }
}
