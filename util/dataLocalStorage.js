export function saveOnLocaStorage(data) {
    localStorage.setItem('posts', JSON.stringify(data));
}

export function readLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}