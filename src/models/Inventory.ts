import { uuid } from 'uuidv4';

class Inventory {
  id: string;

  type: string;

  location: string;

  conservationStatus: string;

  date: Date;

  constructor(
    type: string,
    location: string,
    conservationStatus: string,
    date: Date,
  ) {
    this.id = uuid();
    this.type = type;
    this.location = location;
    this.conservationStatus = conservationStatus;
    this.date = date;
  }
}

export default Inventory;
