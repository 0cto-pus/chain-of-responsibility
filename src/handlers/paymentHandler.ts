import { AbstractHandler } from './abstractHandler';

export class PaymentHandler extends AbstractHandler {
  public handle(): void {
    let isPayment = true;
    if (isPayment) {
      console.log('Processing payment...');
      super.handle();
    } else {
      console.log('Payment failed.');
    }
  }
}
