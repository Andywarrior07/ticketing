import { Publisher, Subjects, TicketCreatedEvent } from '@gittickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
