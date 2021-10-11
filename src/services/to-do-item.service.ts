export class ToDoItemService {

  public getToDoItems(): any[] {

    // Get external source (Api | database |static files....)
    return [
      {
        id: 1,
        name: 'Item 1'
      },
      {
        id: 2,
        name: 'Item 2'
      }
    ];
  }

}
