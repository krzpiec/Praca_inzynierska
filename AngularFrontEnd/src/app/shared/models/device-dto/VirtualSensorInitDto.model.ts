export class VirtualSensorInitDto{
constructor(
  public macAdr: String,
  public channelNumber: number ,
  public unit: String,
  public description:String,
  public latitude:number,
  public longitude:number
   ){

}
}
