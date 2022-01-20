package polsl.pl.IoTBE.common;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Component
@Getter
public class MqttConfigValues {

    public static String sendRequestSuffix = "/get";
    public static String receiveRequestSuffix = "/receive";
    public static String configSuffix = "/config";
    public static String configMessageGet = "dawajkonfiga";

    public static String DeviceSimulatorSendTopicsToSubscribe = "DeviceSimulator/topics";


    public static String configPortName = "port";
    public static String configTypeName = "type";
    public static String configChannelName = "channels";

    public static String getMeasurementPayload = "1";

    public static int waitForConfigResponseTimeSeconds = 20;
    public static int waitForMeasurementResponseTimeSeconds = 10;
}
