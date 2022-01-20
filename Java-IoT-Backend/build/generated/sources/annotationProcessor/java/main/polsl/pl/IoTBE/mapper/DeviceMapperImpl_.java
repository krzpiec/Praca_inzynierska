package polsl.pl.IoTBE.mapper;

import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import polsl.pl.IoTBE.repository.dao.Device;
import polsl.pl.IoTBE.rest.dto.DeviceDescriptionDto;
import polsl.pl.IoTBE.rest.dto.DeviceDto;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-01-20T03:15:44+0100",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 11.0.9 (Oracle Corporation)"
)
@Component
@Qualifier("delegate")
public class DeviceMapperImpl_ implements DeviceMapper {

    @Override
    public DeviceDto deviceToDeviceDto(Device device) {
        if ( device == null ) {
            return null;
        }

        DeviceDto deviceDto = new DeviceDto();

        deviceDto.setCreateTime( device.getCreateTime() );

        return deviceDto;
    }

    @Override
    public Device deviceDtoToDevice(DeviceDto deviceDto) {
        if ( deviceDto == null ) {
            return null;
        }

        Device device = new Device();

        device.setCreateTime( deviceDto.getCreateTime() );

        return device;
    }

    @Override
    public Device deviceDescriptionDtoToDevice(DeviceDescriptionDto deviceDescriptionDto) {
        if ( deviceDescriptionDto == null ) {
            return null;
        }

        Device device = new Device();

        device.setFriendlyName( deviceDescriptionDto.getFriendlyName() );
        device.setDescription( deviceDescriptionDto.getDescription() );
        device.setMacAdr( deviceDescriptionDto.getMacAdr() );

        return device;
    }

    @Override
    public DeviceDto deviceDescriptionDtoToDeviceDto(DeviceDescriptionDto deviceDescriptionDto) {
        if ( deviceDescriptionDto == null ) {
            return null;
        }

        DeviceDto deviceDto = new DeviceDto();

        return deviceDto;
    }

    @Override
    public DeviceDescriptionDto deviceToDeviceDescriptionDto(Device device) {
        if ( device == null ) {
            return null;
        }

        DeviceDescriptionDto deviceDescriptionDto = new DeviceDescriptionDto();

        deviceDescriptionDto.setFriendlyName( device.getFriendlyName() );
        deviceDescriptionDto.setDescription( device.getDescription() );
        deviceDescriptionDto.setMacAdr( device.getMacAdr() );

        return deviceDescriptionDto;
    }
}
