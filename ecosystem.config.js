module.exports = {
    apps: [{
        name: 'localtunnel-server',
        script: './bin/server',
        node_args: '-r esm',
        instances: 1,
        exec_mode: "fork",
        wait_ready: false,
        watch: false,
    }]
}