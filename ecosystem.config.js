module.exports = {
  apps : [{
    name   : "KaierPlanetBase",
    script : "./bin/www",
    watch  : true,
    log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    env: {
      NODE_ENV: "development",
      PORT: 4801,
      UPLOADER_AK: '9OGLd9KVSUq4GhoNv2JS8Fg68M-0CawSEs-e1lPK',
      UPLOADER_SK: 'qvVqq0Fjlx8xpyBjp7WvnjyGqVpdXOsSTQqS19RN',
      SMS_APP_ID: '1400077093',
      SMS_APP_KEY: '45a725e82703b9b1ac98676278f1804e',
      AUTH_SECRET: 'aU1YJa8ABZbTGH15X9Cp0af9IcRt5q7o',
      API_SERVER_URL: 'https://kaierbase-dev.xiaojee.cn',
      REDIS_URL: '193.112.106.11',
      REDIS_PORT: '6379',
      REDIS_DB: '0',
      REDIS_AUTH: 'Simors2018',
      MONGODB_URL: 'mongodb://193.112.106.11:27017/KaierPlanet_dev',
      MONGODB_USER: '',
      MONGODB_PWD: '',
    },
    env_staging : {
      NODE_ENV: "staging",
      PORT: 4802,
      UPLOADER_AK: '9OGLd9KVSUq4GhoNv2JS8Fg68M-0CawSEs-e1lPK',
      UPLOADER_SK: 'qvVqq0Fjlx8xpyBjp7WvnjyGqVpdXOsSTQqS19RN',
      SMS_APP_ID: '1400077093',
      SMS_APP_KEY: '45a725e82703b9b1ac98676278f1804e',
      AUTH_SECRET: 'aU1YJa8ABZbTGH15X9Cp0af9IcRt5q7o',
      API_SERVER_URL: 'https://kaierbase-stage.xiaojee.cn',
      REDIS_URL: '193.112.106.11',
      REDIS_PORT: '6379',
      REDIS_DB: '1',
      REDIS_AUTH: 'Simors2018',
    },
    env_production : {
      NODE_ENV: "production",
      PORT: 4803,
      UPLOADER_AK: '9OGLd9KVSUq4GhoNv2JS8Fg68M-0CawSEs-e1lPK',
      UPLOADER_SK: 'qvVqq0Fjlx8xpyBjp7WvnjyGqVpdXOsSTQqS19RN',
      SMS_APP_ID: '1400077093',
      SMS_APP_KEY: '45a725e82703b9b1ac98676278f1804e',
      AUTH_SECRET: 'aU1YJa8ABZbTGH15X9Cp0af9IcRt5q7o',
      API_SERVER_URL: 'https://kaierbase.xiaojee.cn',
      REDIS_URL: '193.112.106.11',
      REDIS_PORT: '6379',
      REDIS_DB: '2',
      REDIS_AUTH: 'Simors2018',
    }
  }]
}
