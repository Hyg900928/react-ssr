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
      watch: true,
      env: {
        "NODE_ENV": "development",
        "DOMAIN_USE": "development"
      },
      env_production: {
        NODE_ENV: 'production'
      },
      watch: [
        "server",
        "next.config.js",
        "babel.config.js",
        "eslintrc",
        "eslintignore",
        "postcss.config.js"
      ]
    }
  ],
  deploy: {
    production: {
      key: '/root/.ssh',
      user: "root",
      host: ["120.78.212.232"],
      port: 22,
      ref: "origin/master",
      repo: "git@github.com:Hyg900928/react-ssr.git",
      path: "/root/workspace/www",
      ssh_options: "StrictHostKeyChecking=no",
      "post-deploy": 'npm install && npm run build-prod && npm run start-prod',
      env: {
        NODE_ENV: 'production'
      }

    }
  }
}
