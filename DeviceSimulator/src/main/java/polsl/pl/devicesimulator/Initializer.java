package polsl.pl.devicesimulator;

import org.springframework.beans.factory.annotation.Autowired;
import polsl.pl.devicesimulator.mqtt.MqttSubscriber;

public class Initializer {
    @Autowired
    MqttSubscriber mqttSubscriber;


}
