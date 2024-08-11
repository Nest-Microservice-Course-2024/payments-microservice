import { Module } from '@nestjs/common';

import { PaymentsService } from './payments.service';
import { NatsModule } from 'src/transports/nats.module';
import { PaymentsController } from './payments.controller';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  imports: [NatsModule],
})
export class PaymentsModule {}
