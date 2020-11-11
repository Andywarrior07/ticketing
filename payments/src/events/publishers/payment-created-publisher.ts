import { Publisher, Subjects, PaymentCreatedEvent } from '@gittickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
