package polsl.pl.IoTBE.responseComminicates;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@AllArgsConstructor
@Data
public class ResponseMessageAndList<T> {

    String message;
    List<T> list;
}
