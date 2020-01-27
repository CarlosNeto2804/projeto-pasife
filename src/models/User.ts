import {Schema, model, Document} from 'mongoose';

interface UserInterface extends Document {
    email?:string,
    firstName?:string,
    lastName?:string,
}

const schema = {
  email: String,
  firstName:String,
  lastName:String,   
};
const UserSchema = new Schema(schema, {timestamps: true});
export default model<UserInterface>('User',UserSchema);