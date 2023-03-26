export function extractBrackets(text: string): string[] {
    const pattern = /\[[^\]]*\]/g;
    const matches = text.match(pattern) || [];
    return matches;
}
