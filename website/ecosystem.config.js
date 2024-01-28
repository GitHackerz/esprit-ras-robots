module.exports = {
    apps: [
        {
            name: 'ESPRIT RAS ROBOTS WebApp',
            exec_mode: 'cluster',
            script: './node_modules/next/dist/bin/next',
            args: 'start --port 7050',
            exp_backoff_restart_delay: 100,
            watch: true,
            max_memory_restart: '400M'
        }
    ]
}
