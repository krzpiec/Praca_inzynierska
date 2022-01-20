package polsl.pl.IoTBE.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import polsl.pl.IoTBE.repository.dao.Channel;
import polsl.pl.IoTBE.rest.dto.ChannelDto;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-01-20T03:15:44+0100",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 11.0.9 (Oracle Corporation)"
)
@Component
public class ChannelMapperImpl implements ChannelMapper {

    @Override
    public ChannelDto channelToChannelDto(Channel channel) {
        if ( channel == null ) {
            return null;
        }

        ChannelDto channelDto = new ChannelDto();

        channelDto.setType( channel.getType() );
        channelDto.setChannelNumber( String.valueOf( channel.getChannelNumber() ) );

        return channelDto;
    }
}
