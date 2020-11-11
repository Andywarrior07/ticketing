import { Publisher, Subjects, TicketUpdatedEvent } from '@gittickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
