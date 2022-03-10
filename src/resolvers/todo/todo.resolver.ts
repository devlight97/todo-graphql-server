import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Todo, todoModel } from '../../models/Todo.model';
import { TodoInput } from './todo.type';

@Resolver()
export class TodoResolver {
  @Query(() => Todo, { nullable: false })
  public async returnSingleTodo(@Arg('id') id: string) {
    return await todoModel.findById({ _id: id });
  }

  @Query(() => [Todo])
  public async returnAllTodos() {
    return await todoModel.find();
  }

  @Mutation(() => Todo)
  public async createTodo(
    @Arg('data') { name, description }: TodoInput
  ): Promise<Todo> {
    const todo = (
      await todoModel.create({
        name,
        description,
      })
    ).save();
    return todo;
  }

  @Mutation(() => Boolean)
  public async deleteTodo(@Arg('id') id: string) {
    await todoModel.deleteOne({ id });
    return true;
  }
}
