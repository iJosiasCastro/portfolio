module.exports = {
  apps: [
    {
      name: 'JosiasCastroApp',
      port: 3002,
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs',
      args: 'preview',
    },
  ],
}