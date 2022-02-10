import ResponseMessage from "./Response";

const response = new ResponseMessage();

export default class Crud {
  // You have to pass model name when using this class and all operations continue with the model
  private modelName: any;
  constructor(name: any) {
    this.modelName = name;
  }

  // this method is used for data save
  async _saveData(data: any) {
    try {
      if (data) {
        const savedData = await this.modelName.create(data);
        return response.successResponse(savedData);
      } else {
        return response.badRequestResponse("Fill Requeued felid");
      }
    } catch (error) {
      console.log({ crudSave: error });
      return response.serverErrorResponse();
    }
  }

  //  this method is used to get all data
  async _getAll(filter: string = "") {
    try {
      const allResponse = await this.modelName
        .find({}, filter)
        .sort({ updatedAt: -1 });
      if (allResponse) {
        return response.successResponse(allResponse);
      } else {
        return response.serverErrorResponse();
      }
    } catch (error) {
      console.log({ crudGetAll: error });
      return response.serverErrorResponse();
    }
  }
  //  this method is used to get data with query 
  async _getByQuery(query: object, filter: string = "") {
    try {
      const allResponse = await this.modelName
        .find(query, filter)
        .sort({ updatedAt: -1 });
      if (allResponse) {
        return response.successResponse(allResponse);
      } else {
        return response.serverErrorResponse();
      }
    } catch (error) {
      console.log({ crudGetAll: error });
      return response.serverErrorResponse();
    }
  }
  //  get single data
  async _getSingle(id: string) {
    try {
      const singleItem = await this.modelName.findById(id);
      if (singleItem) {
        return response.successResponse(singleItem);
      } else {
        return response.serverErrorResponse();
      }
    } catch (error) {
      console.log({ crudGetAll: error });
      return response.serverErrorResponse();
    }
  }

  // used for data update
  async _updateData(id: string, data: object) {
    try {
      const findData = await this.modelName.findById(id);
      if (findData) {
        const updateData = await this.modelName.findByIdAndUpdate(id, data);

        if (updateData) {
          const updatedData = await this.modelName.findById({ _id: id });
          return response.successResponse(updatedData);
        }
      } else {
        return response.notFoundResponse("Data Not Found");
      }
    } catch (error) {
      console.log({ crudUpdate: error });
      return response.notFoundResponse("Data Not Found");
    }
  }

  // used for data update
  async _updateManyData( data: any) {
    try {
      // const findData = await this.modelName.findById(id);
      // if (findData) {
        const updateData = await this.modelName.updateMany(
          { status: {status: "inActive"} },
          {$set: {
            status: "active"
          }},
          );

        if (updateData) {
          // const updatedData = await this.modelName.findById({ _id: id });
          return response.successResponse(updateData);
        }
      // } else {
      //   return response.notFoundResponse("Data Not Found");
      // }
    } catch (error) {
      console.log({ crudUpdate: error });
      return response.notFoundResponse("Data Not Found");
    }
  }

  // this is used for data delete
  async _deleteData(id: string) {
    try {
      const deleteData = await this.modelName.findByIdAndRemove(id);
      if (deleteData) {
        return response.successResponse(deleteData);
      } else {
        return response.serverErrorResponse();
      }
    } catch (error) {
      console.log({ delete: error });
      return response.notFoundResponse("Data Not Found");
    }
  }
}
