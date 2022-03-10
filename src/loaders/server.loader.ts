import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { TodoResolver } from '../resolvers/todo/todo.resolver';

export class ServerLoader {
  public static async initiate(): Promise<Application> {
    const schema = await buildSchema({
      emitSchemaFile: true,
      resolvers: [TodoResolver],
      validate: false,
    });
    const server = new ApolloServer({
      schema,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    });

    const app:Application = express();
    await server.start();
    server.applyMiddleware({ app });
    // console.log(server.graphqlPath);
    return app;
  }
}
