import { Request, Response, NextFunction } from 'express';
export declare class Student {
    _model: any;
    constructor(norm: any);
    getAllStudents(model: any): (req: Request<import("../../../../../../../../Users/albertavery/OneDrive - Fresno State/Spring 2020/IS 183/ContactsAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/albertavery/OneDrive - Fresno State/Spring 2020/IS 183/ContactsAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getStudentById(model: any): (req: Request<import("../../../../../../../../Users/albertavery/OneDrive - Fresno State/Spring 2020/IS 183/ContactsAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/albertavery/OneDrive - Fresno State/Spring 2020/IS 183/ContactsAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
