// import type { NextFetchEvent, NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'
// export default async function handler(req: NextRequest, context: NextFetchEvent) {
//     try {
//         const stream = true
//         const openAiPayload = {
//             model: 'gpt-3.5-turbo',
//             messages: [
//                 { role: 'user', content: '你好' },
//             ],
//             max_tokens: 800,
//             stream,
//         }

//         const result = await fetchOpenAIResult(openAiPayload, openaiApiKey, videoConfig)
//         if (stream) {
//             return new Response(result)
//         }

//         return NextResponse.json(result)
//     } catch (error: any) {
//         console.error(error.message)
//         return new Response(
//             JSON.stringify({
//                 errorMessage: error.message,
//             }),
//             {
//                 status: 500,
//             },
//         )
//     }
// }