import Crud from "../../class/Crud";
import ResponseMessage from "../../class/Response";
import DistributionModel from "../../model/distribution";

const crud = new Crud(DistributionModel);
const response = new ResponseMessage;

export default class DistributionClass {
    
    async getAllDistribution (req: any, res: any) {
        const result = await crud._getAll();
        res.json(result)
    }

    async saveDistribution (req: any, res: any) {
        const distribution: object = req.body;
        if(distribution){
            const result = await crud._saveData(distribution);
            res.json(result)
        }else{
            res.json(response.badRequestResponse("fill required field"))
        }
    }

    async updateDistribution (req: any, res: any) {
        const {id} = req.params;
        const distribution: object = req.body;
        if(distribution){
            const result = await crud._updateData(id, distribution);
            res.json(result)
        }else{
            res.json(response.badRequestResponse("fill required field"))
        }
    }

    async deleteDistribution (req: any, res: any) {
        const {id} = req.params;
        const result = await crud._deleteData(id);
        res.json(result);
    }

}