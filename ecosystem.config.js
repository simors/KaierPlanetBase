module.exports = {
  apps : [{
    name   : "KaierPlanetBase",
    script : "./bin/www",
    watch  : true,
    env: {
      "NODE_ENV": "development",
      "PORT": 4801
    },
    env_production : {
      "NODE_ENV": "production",
      "PORT": 4801
    }
  }]
}
