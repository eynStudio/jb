export const isWx = () => {
    let ua = navigator.userAgent.toLowerCase();
    return (String)(ua.match(/MicroMessenger/i)) == "micromessenger"
}

export const wx = {
    isWx,
}