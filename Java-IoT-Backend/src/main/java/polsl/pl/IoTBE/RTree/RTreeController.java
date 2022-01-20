package polsl.pl.IoTBE.RTree;

import com.github.davidmoten.rtree.geometry.Geometries;
import com.github.davidmoten.rtree.geometry.Rectangle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import polsl.pl.IoTBE.RTree.RectangleDto;
import polsl.pl.IoTBE.responseComminicates.ResponseMessageAndList;
import polsl.pl.IoTBE.responseComminicates.MeasurmentResults;

import java.util.ArrayList;
import java.util.List;
import java.util.OptionalDouble;

@RestController
public class RTreeController {


    @Autowired
    RTreeService rTreeService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/rtree/search")
    public ResponseEntity<ResponseMessageAndList<MeasurmentResults>> searchThroughRTree(@RequestBody RectangleDto rectangleDto){

        Rectangle searchRectangle = Geometries.rectangle(rectangleDto.getX1(), rectangleDto.getY1(), rectangleDto.getX2(), rectangleDto.getY2());

        List<String> measurmentsResults =  rTreeService.searchThroughRTree(searchRectangle);

        List<MeasurmentResults> measurmentResultsList = rTreeService.convertStringResultsToMeasurmentResults(measurmentsResults);

        ResponseMessageAndList<MeasurmentResults> responseMessageAndList = new ResponseMessageAndList<MeasurmentResults>("Wyniki: ",measurmentResultsList);

        return new ResponseEntity<ResponseMessageAndList<MeasurmentResults>>(responseMessageAndList, HttpStatus.OK);

    }


}
