export class BaseAPI {
  // На случай, если забудете переопределить метод и используете его, — выстрелит ошибка
  create(data) : Promise<unknown> { throw new Error('Not implemented'); }

  request(data) : Promise<unknown> { throw new Error('Not implemented'); }

  update(data) : Promise<unknown> { throw new Error('Not implemented'); }

  delete(data) : Promise<unknown> { throw new Error('Not implemented'); }
}
