export default function get_environment() {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = 5005
    return {
        backend_url: `${protocol}//${hostname}:${port}`
    }
}
