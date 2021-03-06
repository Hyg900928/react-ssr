  /*eslint no-dupe-keys: "error"*/


module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'react-ssr',
      script: 'server/server.js',
      env: {
        "NODE_ENV": "development",
        COMMON_VARIABLE: "true",
        "DOMAIN_USE": 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        "DOMAIN_USE": 'production'
      },
      watch: [
        "server"
      ]
    }
  ],
  deploy: {
    production: {
      user: "root",
      host: ["172.16.1.22"],
      port: 22,
      ref: "origin/master",
      repo: "git@github.com:Hyg900928/react-ssr.git",
      path: "/home/frontend/test/production",
      ssh_options: "StrictHostKeyChecking=no",
      "pre-setup": "ls -la",
      "post-setup": "ls -la",
      "pre-deploy-local": "echo 'This is a local executed command'",
      "post-deploy": 'npm install && npm run build-prod && npm run start-prod',
      env: {
        NODE_ENV: 'production'
      }

    }
  }
}
