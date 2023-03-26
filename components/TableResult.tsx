import { Word } from '@/types'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
} from '@chakra-ui/react'

import React from 'react'
import TableBody from './TableBody'
interface TableResultProps {
    results: Array<Word>
}
export default function TableResult({ results }: TableResultProps) {
    return (
        <TableContainer>
            <Table variant='simple' >
                <Thead>
                    <Tr>
                        <Th>单词</Th>
                        <Th>含义</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {results.map((item, index) => (
                        <TableBody key={index} m={item.m} w={item.w} />
                    ))}

                </Tbody>
            </Table>
        </TableContainer>
    )
}
