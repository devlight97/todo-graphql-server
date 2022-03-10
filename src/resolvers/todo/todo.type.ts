import { InputType, Field } from 'type-graphql';
import { Length } from 'class-validator';
import { Todo } from '../../models/Todo.model';

@InputType()
export class TodoInput implements Partial<Todo> {
  @Field()
  public name: string;

  @Field()
  @Length(1, 255)
  public description: string;
}
