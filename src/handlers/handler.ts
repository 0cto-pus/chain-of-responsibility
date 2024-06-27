export interface Handler {
  setNext(next: Handler): Handler;
  handle(): void;
}
