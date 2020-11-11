import { Publisher, OrderCreatedEvent, Subjects } from '@gittickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
