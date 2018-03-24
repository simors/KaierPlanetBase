/**
 * Created by yangyang on 2018/3/21.
 */
import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27501/KaierPlanet_dev"

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 5,
  bufferMaxEntries: 0
};

mongoose.connect(MONGODB_URL, options);

export const mongodb = mongoose.connection

mongodb.on('error', function (err) {
  console.error('Mongoose connect error:', err)
})

mongodb.on('connected', function () {
  console.log('Mongoose connect to', MONGODB_URL)
})

mongodb.on('disconnected', function () {
  console.log('Mongoose connection disconnected', MONGODB_URL);
})