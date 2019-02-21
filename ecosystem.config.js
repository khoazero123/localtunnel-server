module.exports = {
    apps: [{
        name: 'localtunnel-server',
        script: './bin/server',
        node_args: '-r esm',
        args: '--port 1234 --secure true',
        instances: 1,
        exec_mode: "fork",
        wait_ready: false,
        watch: false,
    }]
}