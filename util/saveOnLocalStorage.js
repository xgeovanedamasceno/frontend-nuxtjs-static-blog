export default function saveOnLocaStorage(data) {
    localStorage.setItem('posts', JSON.stringify(data));
}
