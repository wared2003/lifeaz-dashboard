//models defibrillateur

export class Defibrillator {

   serial!: string;
   locationName!: string;
   locationAddr!: string;
   state!: number;
   electrodesExpiry!: string;
   locationAddrStreet?: string;
   locationAddrCity?: string;

  //constructor
  constructor(
     serial: string,
     locationName: string,
     locationAddr: string,
     state: number,
     electrodesExpiry: string,
  )
  {
    this.serial = serial;
    this.locationName = locationName;
    this.locationAddr = locationAddr;
    this.state = state;
    this.electrodesExpiry = electrodesExpiry;
    let splitedAddr: string[] = this.locationAddr.split(",");
    this.locationAddrStreet = splitedAddr[0];
    this.locationAddrCity = splitedAddr[1];
  }
}
