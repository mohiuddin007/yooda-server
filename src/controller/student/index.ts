import Crud from "../../class/Crud";
import ResponseMessage from "../../class/Response";
import StudentModel from "../../model/student";

const crud = new Crud(StudentModel);
const response = new ResponseMessage;

export default class StudentClass {
    
    async getAllStudent (req: any, res: any) {
        const result = await crud._getAll();
        res.json(result)
    }

    async saveStudent (req: any, res: any) {
        const student: object = req.body;
        if(student){
            const result = await crud._saveData(student);
            res.json(result)
        }else{
            res.json(response.badRequestResponse("fill required field"))
        }
    }

    async updateStudent (req: any, res: any) {
        const {id} = req.params;
        const student: object = req.body;
        if(student){
            const result = await crud._updateData(id, student);
            res.json(result)
        }else{
            res.json(response.badRequestResponse("fill required field"))
        }
    }

    async updateMultipleStudent (req: any, res: any) {
        // const {id} = req.params;
        const student: any = req.body;
        if(student){
            const result = await crud._updateManyData(student);
            res.json(result)
        }else{
            res.json(response.badRequestResponse("fill required field"))
        }
    }

    async deleteStudent (req: any, res: any) {
        const {id} = req.params;
        const result = await crud._deleteData(id);
        res.json(result);
    }

}