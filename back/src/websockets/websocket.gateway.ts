import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RoomService } from './room.service';

@WebSocketGateway(3001, { cors: { origin: '*' } })
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private roomService: RoomService) {}

  @WebSocketServer()
  public server: Server;

  handleConnection(client: Socket) {
    console.log(`client connected: ${client.id}`);
    this.roomService.findOpenRoom(client.id);
  }

  handleDisconnect(client: Socket) {
    console.log(`client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: string,
  ): void {
    client.broadcast.emit('message', data);
  }
}
