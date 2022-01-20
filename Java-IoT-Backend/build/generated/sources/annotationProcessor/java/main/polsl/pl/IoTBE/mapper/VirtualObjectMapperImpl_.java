package polsl.pl.IoTBE.mapper;

import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import polsl.pl.IoTBE.domain.VirtualObject;
import polsl.pl.IoTBE.domain.VirtualTermometer;
import polsl.pl.IoTBE.message.channel.VirtualChannel;
import polsl.pl.IoTBE.repository.dao.Localization;
import polsl.pl.IoTBE.rest.dto.VirtualObjectDto;
import polsl.pl.IoTBE.rest.dto.VirtualSensorDto;
import polsl.pl.IoTBE.rest.dto.VirtualSensorInitDto;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-01-20T03:15:44+0100",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 11.0.9 (Oracle Corporation)"
)
@Component
@Qualifier("delegate")
public class VirtualObjectMapperImpl_ implements VirtualObjectMapper {

    @Override
    public VirtualObjectDto virtualObjectToVirtualObjectDto(VirtualObject virtualObject) {
        if ( virtualObject == null ) {
            return null;
        }

        VirtualObjectDto virtualObjectDto = new VirtualObjectDto();

        virtualObjectDto.setMac( virtualObject.getMac() );
        virtualObjectDto.setChannelNumber( virtualObject.getChannelNumber() );
        virtualObjectDto.setDesiredType( virtualObject.getDesiredType() );

        return virtualObjectDto;
    }

    @Override
    public VirtualTermometer virtualSensorInitDtoToVirtualSensor(VirtualSensorInitDto virtualSensorInitDto) {
        if ( virtualSensorInitDto == null ) {
            return null;
        }

        long channelNumber = 0L;
        String unit = null;

        if ( virtualSensorInitDto.getChannelNumber() != null ) {
            channelNumber = Long.parseLong( virtualSensorInitDto.getChannelNumber() );
        }
        unit = virtualSensorInitDto.getUnit();

        String mac = null;
        VirtualChannel virtualChannel = null;
        Localization localization = null;
        int lastReadValue = 0;
        String desiredType = null;

        VirtualTermometer virtualTermometer = new VirtualTermometer( mac, channelNumber, virtualChannel, localization, unit, lastReadValue, desiredType );

        return virtualTermometer;
    }

    @Override
    public VirtualSensorDto virtualSensorToVirtualSensorDto(VirtualTermometer virtualTermometer) {
        if ( virtualTermometer == null ) {
            return null;
        }

        VirtualSensorDto virtualSensorDto = new VirtualSensorDto();

        virtualSensorDto.setMac( virtualTermometer.getMac() );
        virtualSensorDto.setChannelNumber( String.valueOf( virtualTermometer.getChannelNumber() ) );
        virtualSensorDto.setUnit( virtualTermometer.getUnit() );
        virtualSensorDto.setLastReadValue( String.valueOf( virtualTermometer.getLastReadValue() ) );

        return virtualSensorDto;
    }
}
