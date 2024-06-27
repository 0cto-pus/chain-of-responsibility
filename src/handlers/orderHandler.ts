import { AbstractHandler } from './abstractHandler';

export class OrderHandler extends AbstractHandler {
  public handle(): void {
    let isOrder = true;
    if (isOrder) {
      console.log('Processing order...');
      super.handle();
    } else {
      console.log('Invalid order.');
    }
  }
}
