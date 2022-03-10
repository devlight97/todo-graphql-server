import { connect, Mongoose, ConnectOptions } from 'mongoose';

export class MongoLoader {
  constructor() {
    this.initiate();
  }

  private async initiate(): Promise<Mongoose> {
    const mongoose: Mongoose = await connect(
      'mongodb://tester:tester@192.168.99.103:27017/test'
    );
    return mongoose;
  }
}
