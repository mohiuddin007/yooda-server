import Crud from "../../class/Crud";
import ResponseMessage from "../../class/Response";
import FoodModel from "../../model/food";

const crud = new Crud(FoodModel);
const response = new ResponseMessage;

export default class FoodClass {
    
    async getAllFood (req: any, res: any) {
        const result = await crud._getAll();
        res.json(result)
    }

    async saveFood (req: any, res: any) {
        const food: object = req.body;
        if(food){
            const result = await crud._saveData(food);
            res.json(result)
        }else{
            res.json(response.badRequestResponse("fill required field"))
        }
    }

    async updateFood (req: any, res: any) {
        const {id} = req.params;
        const food: object = req.body;
        if(food){
            const result = await crud._updateData(id, food);
            res.json(result)
        }else{
            res.json(response.badRequestResponse("fill required field"))
        }
    }

    async deleteFood (req: any, res: any) {
        const {id} = req.params;
        const result = await crud._deleteData(id);
        res.json(result);
    }

}