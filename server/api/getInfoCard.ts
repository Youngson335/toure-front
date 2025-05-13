import cards from '@/server/localdatabase/cards.json'
export default defineEventHandler(() => {
    return cards;
});