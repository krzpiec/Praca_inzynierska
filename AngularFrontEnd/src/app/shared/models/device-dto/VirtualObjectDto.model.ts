import { LocalizationDto } from './localizationDto.model';
export class VirtualObjectDto{
  constructor(
    public mac: String ,
    public channelNumber: number,
    public localizationDto: LocalizationDto,
    public description: String,
    public desiredType : String
  ){}
}
