export default function get_environment() {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const my_port = window.location.port;
    const port = 5005
    const socker_server_port = 3500
    return {
        backend_url: `${protocol}//${hostname}:${port}`,
        socker_server_port: socker_server_port,
        my_port: my_port
    }
}
