/**
 * Created by yangyang on 2018/3/23.
 */
import mongoose from '../util/mongdUtil'

let UserSchema = new mongoose.Schema({
  username: {type: String},
  mobilePhone: {type: String},
  password: {type: String},
  loginDate : { type: Date}
})

export default User =  mongoose.model("User", UserSchema)