namespace Union {
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: 'hight' | 'low';
  };

  type PartialTodo = Partial<Todo>;
  function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo): Todo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: Todo = {
    title: '9시 뉴스',
    description: '강남스타일 1위',
    label: 'PSY',
    priority: 'hight',
  };

  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
}
