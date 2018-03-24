/**
 * Created by yangyang on 2018/3/23.
 */
import mongodb from '../util/mongdUtil'

let UserSchema = new mongodb.Schema({
  username: {type: String},
  mobilePhone: {type: String},
  password: {type: String},
  loginDate : { type: Date}
})

export default User =  mongodb.model("User", UserSchema)