import React from 'react'
import { Tr, Td } from '@chakra-ui/react'
import { Word } from '@/types'

export default function TableBody({ w, m }: Word) {
    return (
        <Tr>
            <Td textColor="black">{w}</Td>
            <Td textColor="black">{m}</Td>
        </Tr >
    )
}
