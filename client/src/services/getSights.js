export default function getSights() {
  return fetch('/api/sights').then(res => res.json())
}
