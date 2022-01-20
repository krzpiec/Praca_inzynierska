import { ChannelDto } from './channelDto.model';
import { DeviceDescriptionDto } from './deviceDescriptionDto.model';
export class DeviceDto{
  constructor(
  public deviceDescription: DeviceDescriptionDto ,
  public channelDtoList: ChannelDto[],
  public createTime: string
  ){}
}
