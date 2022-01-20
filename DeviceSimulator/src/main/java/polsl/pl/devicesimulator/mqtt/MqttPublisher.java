package polsl.pl.devicesimulator.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.TimeUnit;

@RestController
public class MqttPublisher {
    @Autowired
    MqttGateway mqtGateway;

    public ResponseEntity<?> publish(String topic, String payload) {

        try {
            mqtGateway.senToMqtt(payload, topic);
            System.out.println("published to topic: "+topic);

            try {
                TimeUnit.MILLISECONDS.sleep(100);
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
            }

            return ResponseEntity.ok("Success");
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.ok("fail");
        }
    }
}