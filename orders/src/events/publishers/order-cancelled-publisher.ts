import { Publisher, OrderCancelledEvent, Subjects } from '@gittickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
