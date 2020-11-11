import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from '@gittickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
