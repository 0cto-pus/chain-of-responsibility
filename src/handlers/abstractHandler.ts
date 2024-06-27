import { Handler } from './handler';

export abstract class AbstractHandler implements Handler {
  private next: Handler | null = null;

  public setNext(next: Handler): Handler {
    this.next = next;
    return next;
  }

  public handle(): void {
    if (this.next) {
      this.next.handle();
    }
  }
}
