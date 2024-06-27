import express, { Request, Response } from 'express';
import { OrderHandler } from './handlers/orderHandler';
import { PaymentHandler } from './handlers/paymentHandler';
import { ShippingHandler } from './handlers/shippingHandler';

const app = express();
app.use(express.json());

const orderHandler = new OrderHandler();
const paymentHandler = new PaymentHandler();
const shippingHandler = new ShippingHandler();

orderHandler.setNext(paymentHandler).setNext(shippingHandler);

app.post('/process', (req: Request, res: Response) => {
  orderHandler.handle();
  res.send('Request processed');
});

export default app;
