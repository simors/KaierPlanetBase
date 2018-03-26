/**
 * Created by yangyang on 2018/3/20.
 */
import User from './model'
import LYAUTH from 'lvyii_auth'

/**
 * 根据userId获取到用户信息
 * @param userId
 * @returns {Promise|Array|{index: number, input: string}}
 */
export async function fetchUserById(userId) {
  function findCallback(err, res) {
    if (err) {
      console.error('error in find user by id,', err)
    }
  }
  return await User.findById(userId).exec(findCallback)
}

/**
 * 根据手机号完成注册或者登录
 * @param phoneNumber
 * @returns {*}
 */
export async function signUpOrlogInWithMobilePhone(phoneNumber) {
  let user = await User.findOneAndUpdate({mobilePhone: phoneNumber}, {loginDate: new Date()}).exec()
  let userInfo = {}
  if (user) {
    userInfo = Object.assign({}, user, {id: user.id})    // lvyii_auth的接口邀请必须返回id
    return userInfo
  } else {
    user = new User({
      username: phoneNumber,
      mobilePhone: phoneNumber,
      loginDate: new Date()
    })
    userInfo =  await user.save()
    userInfo = Object.assign(userInfo, {id: user.id})    // lvyii_auth的接口邀请必须返回id
    return userInfo
  }
}

/**
 * 根据手机号密码完成登录
 * @param phoneNumber
 * @param password
 * @returns {Promise}
 */
export async function loginWithMobilePhone(phoneNumber, password) {
  let user = await User.findOneAndUpdate({mobilePhone: phoneNumber}, {loginDate: new Date()}).exec()
  if (user) {
    if (user.password === password) {
      let userInfo = user
      userInfo.id = userInfo._id    // lvyii_auth的接口邀请必须返回id
      return userInfo
    } else {
      throw new LYAUTH.Error('password not match', {code: 101})
    }
  } else {
    throw new LYAUTH.Error('can not find user', {code: 102})
  }
}

/**
 * 根据用户名密码登录
 * @param username
 * @param password
 * @returns {Promise}
 */
export async function loginWithUsername(username, password) {
  let user = await User.findOneAndUpdate({username: username}, {loginDate: new Date()}).exec()
  if (user) {
    if (user.password === password) {
      let userInfo = user
      userInfo.id = userInfo._id    // lvyii_auth的接口邀请必须返回id
      return userInfo
    } else {
      throw new LYAUTH.Error('password not match', {code: 101})
    }
  } else {
    throw new LYAUTH.Error('can not find user', {code: 102})
  }
}

/**
 * 根据用户名密码完成注册
 * @param username
 * @param password
 * @returns {Promise|*}
 */
export async function signUpWithUsername(username, password) {
  let user = await User.findOne({username: username}).exec()
  if (user) {
    throw new LYAUTH.Error('user already exist', {code: 100})
  } else {
    user = new User({
      username: username,
      password: password,
      loginDate: new Date()
    })
    let userInfo =  await user.save()
    userInfo.id = userInfo._id    // lvyii_auth的接口邀请必须返回id
    return userInfo
  }
}

/**
 * 根据手机号密码完成注册
 * @param phoneNumber
 * @param password
 * @returns {Promise|*}
 */
export async function signUpWithMobilePhone(phoneNumber, password) {
  let user = await User.findOne({mobilePhone: phoneNumber}).exec()
  if (user) {
    throw new LYAUTH.Error('user already exist', {code: 100})
  } else {
    user = new User({
      username: phoneNumber,
      mobilePhone: phoneNumber,
      password: password,
      loginDate: new Date()
    })
    let userInfo =  await user.save()
    userInfo.id = userInfo._id    // lvyii_auth的接口邀请必须返回id
    return userInfo
  }
}