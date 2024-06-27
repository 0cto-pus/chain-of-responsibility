import { AbstractHandler } from './abstractHandler';

export class ShippingHandler extends AbstractHandler {
  public handle(): void {
    let isShipping = true;
    if (isShipping) {
      console.log('Processing shipping...');
      super.handle();
    } else {
      console.log('Shipping failed.');
    }
  }
}
