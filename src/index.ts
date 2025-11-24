export type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";
export type Rank =
    | "A" | "2" | "3" | "4" | "5" | "6" | "7"
    | "8" | "9" | "10" | "J" | "Q" | "K";

export interface Card {
    suit: Suit;
    rank: Rank;
}

export class CardDeck {
    private cards: Card[] = [];

    constructor() {
        this.reset();
    }

    reset() {
        const suits: Suit[] = ["Hearts", "Diamonds", "Clubs", "Spades"];
        const ranks: Rank[] = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

        this.cards = [];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push({ suit, rank });
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw(): Card | null {
        return this.cards.pop() ?? null;
    }

    drawMany(count: number): Card[] {
        const drawn: Card[] = [];
        for (let i = 0; i < count; i++) {
            const card = this.draw();
            if (card) drawn.push(card);
        }
        return drawn;
    }

    size(): number {
        return this.cards.length;
    }

    getCards(): Card[] {
        return [...this.cards];
    }
}
