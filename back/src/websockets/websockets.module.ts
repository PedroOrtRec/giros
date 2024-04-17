import { Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';
import { RoomService } from './room.service';

@Module({
  providers: [WebsocketGateway, RoomService],
})
export class WebsocketsModule {}
