export class EditVirtualObjectDto{
  constructor(
    public mac : String,
    public channelNumber: number,
    public localizationDescription: String,
    public description:String,
    public latitude: number,
    public longitude:number
  ){

  }
}
