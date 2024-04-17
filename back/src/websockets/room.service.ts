import { Injectable } from '@nestjs/common';
import { Room } from 'src/core/room/Room';
import { StatusRoom } from 'src/core/room/StatusRoom';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RoomService {
  roomsList = new Map<string, Room>();

  createRoom(newPlayer: string) {
    const room = new Room(newPlayer, uuidv4());
    this.roomsList.set(room.id, room);
    console.log('Sala creada', room.id);
    return room;
  }

  findOpenRoom(newPlayer: string) {
    let roomFound = false;
    for (const room of this.roomsList.values()) {
      if (room.status === StatusRoom.OPEN) {
        room.addPlayer(newPlayer);
        roomFound = true;
        console.log('Añadido a la sala', room.id);
        console.log('Jugadores en la sala', room.players);
      }
    }
    if (!roomFound) {
      this.createRoom(newPlayer);
    }
  }
}
