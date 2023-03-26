import React from 'react'
import { useState } from 'react';
import { Button, Textarea } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
interface PromptFormProps {
    extractWords: (article: string) => void;
}

export default function PromptForm({ extractWords }: PromptFormProps) {
    const [text, setText] = useState<string>('');
    const toast = useToast();
    const submitText = () => {
        if (text === '') {
            toast({
                position: 'top',
                title: 'Text field is empty.',
                description: 'Please enter some text to extract words.',
                status: 'error',
                duration: 5000,
                isClosable: false,
            });
            return;
        }
        extractWords(text)
    };
    return (
        <>
            <Textarea
                bg='gray.200'
                padding={4}
                marginTop={6}
                height={200}
                color='black'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Button
                bg='gray.500'
                color='white'
                marginTop={4}
                width='100%'
                _hover={{ bg: 'gray.700' }}
                onClick={submitText}
            >
                Extract Words
            </Button>
        </>
    );
}
