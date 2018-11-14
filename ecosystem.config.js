module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'development',
      script: 'server/server.js',
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production: {
        NODE_ENV: 'production'
      },
    }
  ],
  deploy: {
    production: {
      user: "root",
      host: ["120.78.212.232"],
      port: 22,
      ref: "origin/master",
      repo: "git@github.com:Hyg900928/react-ssr.git",
      path: "/root/workspace/www/production",
      ssh_options: "StrictHostKeyChecking=no",
      "post-deploy": 'yarn && yarn build-prod && pm2 startOrRestart ecosystem.config.js --env production',
      env: {
        NODE_ENV: 'production'
      }

    }
  }
}
