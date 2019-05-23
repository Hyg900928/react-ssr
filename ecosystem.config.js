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
      watch: true,
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
      host: ["47.92.67.199"],
      port: 22,
      ref: "origin/master",
      repo: "git@github.com:Hyg900928/react-ssr.git",
      path: "/root/www/react-ssr/production",
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
