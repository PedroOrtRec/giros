import { StatusRoom } from './StatusRoom';

export class Room {
  public id: number;
  public status: StatusRoom = StatusRoom.OPEN;
  private searching = false;
  public players: string[];
  private timeoutId: NodeJS.Timeout;

  constructor(firstPlayer: string) {
    this.players.push(firstPlayer);
    console.log('Sala creada');
  }

  public addPlayer(newPlayer: string) {
    clearTimeout(this.timeoutId);
    if ((this.status = StatusRoom.OPEN && this.players.length < 4)) {
      this.players.push(newPlayer);
      console.log(`Se añadió al usuario: ${newPlayer}`);
    } else {
      throw new Error('La sala está cerrada');
    }

    if (this.players.length === 4) {
      this.searching = false;
      this.closeRoom();
    } else {
      this.searching = true;

      this.timeoutId = setTimeout(() => {
        this.searching = false;
        this.closeRoom();
      }, 5000);
    }
  }

  public removePlayer(player: string) {
    this.players = this.players.filter((p) => p !== player);
    console.log(`Se eliminó al usuario: ${player}`);
    // CUANDO NO HAYA NINGÚN PLAYER EN LA SALA, DEBERÍA ELIMINARSE LA INSTANCIA, POR ELLO DEVOLVEMOS EL TAMAÑO DEL ARRAY
    return this.players.length;
  }

  private closeRoom() {
    this.status = StatusRoom.CLOSE;
    console.log('Sala cerrada');
  }
}
