import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Observable, of } from 'rxjs';
import { Server } from 'socket.io';

@WebSocketGateway({
  // 1
  cors: {
    origin: '*',
  },
})
export class EventGateway {
  // 2
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    // 3
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log(socket.connected);
    });
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any): Observable<WsResponse<any>> {
    console.log('shibaaaa', data);

    return of({
      event: 'message',
      data: 'Message return from server',
    });
  }
}
