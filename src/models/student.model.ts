export class Student {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        name: { type: String, maxlength: 24 },
        email: { type: String, maxlength: 24 },
        phonenum: { type: String, maxlength: 24 },
        class: { type: String, maxlength: 24 },
        group: { type: String, maxlength: 24 },
        user_id: {
          type: Number,
          key: 'foreign',
          references: { table: 'User', foreignKey: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      }, 'A table to store students information model', []];
    }
  
    set model(model: any) {
      this._model = model;
    }
  
    get model() {
      return this._model;
    }
  
  }