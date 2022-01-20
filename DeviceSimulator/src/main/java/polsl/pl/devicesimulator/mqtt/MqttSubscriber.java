package polsl.pl.devicesimulator.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.channel.DirectChannel;
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter;
import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHandler;
import org.springframework.messaging.MessagingException;

import java.util.Arrays;

@Configuration
public class MqttSubscriber {

    MqttPahoMessageDrivenChannelAdapter adapter;
    @Autowired
    MqttMessageHandler mqttMessageHandler;



    @Bean
    public MessageChannel mqttInputChannel() {
        return new DirectChannel();
    }

    @Bean
    public MqttPahoMessageDrivenChannelAdapter inbound() {
        MqttPahoMessageDrivenChannelAdapter adapter =
                new MqttPahoMessageDrivenChannelAdapter("tcp://localhost:1883", "Simulator",
                        "DeviceSimulator/topics");

        adapter.setCompletionTimeout(5000);
        adapter.setConverter(new DefaultPahoMessageConverter());
        adapter.setQos(1);
        adapter.setOutputChannel(mqttInputChannel());
        this.adapter = adapter;
        return adapter;
    }

    @Bean
    @ServiceActivator(inputChannel = "mqttInputChannel")
    public MessageHandler handler() {
        return new MessageHandler() {

            @Override
            public void handleMessage(Message<?> message) throws MessagingException {
               if( message.getHeaders().get("mqtt_receivedTopic").toString().equals("DeviceSimulator/topics")){
                  addTestTopics(message.getPayload().toString());
               }
                 mqttMessageHandler.resolveMessageAndSend(message.getHeaders().get("mqtt_receivedTopic").toString(), message.getPayload().toString());
            }

        };
    }


    private void addTestTopics(String payLoad){
        String[] topics = payLoad.split("//");
        for(String topic: topics){
            if(!Arrays.asList(adapter.getTopic()).contains(topic))
             adapter.addTopic(topic);
        }
        System.out.println("Topics added: ");
        System.out.println(Arrays.toString(adapter.getTopic()));
        System.out.println("koniec tematow");
    }
    }

