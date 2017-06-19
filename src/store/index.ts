import {setObj, getObj} from './localStore'
export const localStore = {setObj, getObj}

export const getCookie = (name) => {
    let match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return (match ? decodeURIComponent(match[3]) : null);
}

export const jbCookie = {getCookie}