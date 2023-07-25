// import { error } from '@sveltejs/kit'
//
// /** @type {import('./$types').PageServerLoad} */
// export async function load() {
//
//     //fetch data from server
//
//
//     const res = await fetch('https://c4f0-78-56-94-203.ngrok-free.app/api/home?populate=deep',
//         {
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json', "ngrok-skip-browser-warning": "69420" },
//         }
//     )
//
//     if (!res.ok) {
//         throw error(res.status, "Could not fetch data")
//     }
//
//     const data = await res.json()
//
//
//
//     return data.data
//
// };