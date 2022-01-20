package polsl.pl.devicesimulator.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.concurrent.ThreadLocalRandom;

@Component
public class MqttMessageHandler {

    @Autowired
    MqttPublisher mqttPublisher;

public void resolveMessageAndSend(String topic, String payLoad){
    String[] topicSegments = topic.split("/");
    String newTopic = topicSegments[0] + "/" + topicSegments[1] + "/receive";

    System.out.println(newTopic);
    Double random = ThreadLocalRandom.current().nextDouble(-15, 15);
    mqttPublisher.publish(newTopic, Double.toString(random));
}



}
