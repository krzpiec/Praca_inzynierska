package polsl.pl.IoTBE.RTree;

import com.github.davidmoten.rtree.Entry;
import com.github.davidmoten.rtree.geometry.Geometries;
import com.github.davidmoten.rtree.geometry.Geometry;
import com.github.davidmoten.rtree.geometry.Rectangle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.integration.graph.TimerStats;
import org.springframework.stereotype.Service;
import polsl.pl.IoTBE.common.MqttConfigValues;
import polsl.pl.IoTBE.common.RTreeConfigValues;
import polsl.pl.IoTBE.domain.VirtualObject;
import polsl.pl.IoTBE.exceptions.NoResponseFromSensorException;
import polsl.pl.IoTBE.mqtt.MqttController;
import polsl.pl.IoTBE.responseComminicates.MeasurmentResults;
import polsl.pl.IoTBE.storage.StorageMenager;
import rx.Observable;
import rx.Observer;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class RTreeService {
    @Autowired
    RTreeManager rTreeManager;
    @Autowired
    StorageMenager storageMenager;
    @Autowired
    MqttController mqttController;

    List<String> searchThroughRTree(Rectangle searchRectangle){

        this.storageMenager.sendTopicsToSubscribeToDeviceSimulator();

        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }

        Observable<Entry<MyRTreeNode, Geometry>> results = rTreeManager.search(searchRectangle,TreeTypes.DoubleNode);

        List<MyRTreeNode> foundNodes = new ArrayList<>();
        List<String> topicPrefixes = new ArrayList<>();
        List<VirtualObject> virtualObjectList = new ArrayList<>();

        results.subscribe(entry ->{
            foundNodes.add(entry.value());
        });

        foundNodes.forEach(node -> {
            virtualObjectList.add(node.getVirtualObject());
            topicPrefixes.add(node.value() + MqttConfigValues.sendRequestSuffix);
        });
        //results.toBlocking().first();



        sendSignalsToMqtt(topicPrefixes);

        getMeasurementsTest(virtualObjectList);

        updateNodeHistories(foundNodes);

        return fetchResults(foundNodes);
    }


    public long RTreeTesting(Rectangle searchRectangle){
        long start = System.nanoTime();
        Observable<Entry<MyRTreeNode, Geometry>> results = rTreeManager.search(searchRectangle,TreeTypes.DoubleNode);
        results.subscribe(response ->{
        });
        long finish = System.nanoTime();
        return finish - start;

    }


    public long teeesting(Rectangle rectangle){
        return this.storageMenager.searchinggggggg(rectangle);

    }

    private List<String> fetchResults(List<MyRTreeNode> foundNodes){
        List<String> results = new ArrayList<>();
        foundNodes.forEach(node ->{
            String result = node.getVirtualObject().getTopicPrefix() + "/" + node.getVirtualObject().getValue();
            results.add(result);
        });
        return results;
    }

    private void updateNodeHistories(List<MyRTreeNode> foundNodes){
        foundNodes.forEach(node ->{
            node.getRecordList().addRecord(new Record<Double>(node.getVirtualObject().getValue(), node.getVirtualObject().getLastValueTimestamp()));
        });
    }

    private void sendSignalsToMqtt(List<String> topicPrefixes){
        List<Boolean> succesfulPublishes = new ArrayList<>(Collections.nCopies(topicPrefixes.size(), false));

        topicPrefixes.forEach(topic ->{
            mqttController.publish(topic, MqttConfigValues.getMeasurementPayload);

        });

//        while(!checkIfAllPublishesDone(succesfulPublishes)){
//            for(int i=0;i<topicPrefixes.size(); i++){
//                if(!succesfulPublishes.get(i)){
//                    if(mqttController.publish(topicPrefixes.get(i), MqttConfigValues.getMeasurementPayload)){
//                        succesfulPublishes.set(i,true);
//                    }
//                }
//
//            }
//        }
        System.out.println("AllPublishesDone");



    }

    private boolean checkIfAllPublishesDone(List<Boolean> succesfulPublishes){
        for (Boolean succesfulPublish : succesfulPublishes) {
            if (!succesfulPublish)
                return false;
        }
        return true;
    }

    private void getMeasurementsTest(List<VirtualObject> virtualObjectList){
        List<Timestamp> timestampList = new ArrayList<>();
        virtualObjectList.forEach(vo ->{
            timestampList.add(vo.getLastValueTimestamp());
        });

        int counter = 0;
        boolean allMeasurmentsDone = false;


        while(counter < MqttConfigValues.waitForMeasurementResponseTimeSeconds && !allMeasurmentsDone){
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
            }

            boolean gotAll = true;
            for(int i=0; i<timestampList.size(); i++){
                if(timestampList.get(i) == virtualObjectList.get(i).getLastValueTimestamp())
                {
                   gotAll = false;
                }
            }
            if(gotAll){
                allMeasurmentsDone = true;
            }

            counter++;
        }


         if(!allMeasurmentsDone){
             List<String> noResposneSensorList = new ArrayList<>();
             for(int i=0; i<timestampList.size(); i++){
                 if(timestampList.get(i) == virtualObjectList.get(i).getLastValueTimestamp())
                 {
                     noResposneSensorList.add(virtualObjectList.get(i).getTopicPrefix());
                 }
             }
             throw new NoResponseFromSensorException(noResposneSensorList);

         }


    }

    private void addTestNodesToRTree(){


        VirtualObject vo = storageMenager.getVirtualObjectList().get(0);

        rTreeManager.addDoubleNode(vo, Geometries.circle(5, 5, 5), TreeTypes.DoubleNode);

        for(int i=1; i<100; i+=3){
            rTreeManager.addDoubleNode(vo,Geometries.circle(i, i, 1), TreeTypes.DoubleNode);
        }
       // rTreeManager.visualize(600,600,RTreeConfigValues.visualizationPath,);
    }

    public List<MeasurmentResults> convertStringResultsToMeasurmentResults(List<String> stringResults){
        List<MeasurmentResults> measurmentResultsList = new ArrayList<>();
        stringResults.forEach(i->{
            String[] segmentation = i.split("/");
            MeasurmentResults measurmentResults = new MeasurmentResults();
            measurmentResults.setMac(segmentation[0]);
            measurmentResults.setChannelNumber(Long.parseLong(segmentation[1]));
            measurmentResults.setReading(segmentation[2]);
            measurmentResultsList.add(measurmentResults);
        });
        return measurmentResultsList;
    }



}
