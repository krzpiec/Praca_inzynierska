import { Pipe } from "@angular/core";
import { Result } from "../shared/models/device-dto/Result.model";

@Pipe({
  name: 'measurmentResultPipe',
  pure: false
})
export class measurmentResultPipe{

  transorm(results: Result[]) : any{


  }
}
