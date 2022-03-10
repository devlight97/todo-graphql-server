import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

type StringType = string;

interface ITodo {
  id: string;
  name: string;
  description: string;
}

@ObjectType({ description: 'The Categories model' })
export class Todo implements ITodo {
  @Field(() => ID)
  public id: string;

  @Field()
  @Property()
  public name!: string;

  @Field()
  @Property()
  public description!: string;
}

export const todoModel = getModelForClass(Todo);
