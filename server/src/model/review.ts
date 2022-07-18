import { db } from "./db"

class ReviewService {
    async findMany(company_id: number) {
        const queryResult = await db.review.findMany({
            where: {
                company_id,
            },
            select: {
                review0: true,
                review1: true,
                review2: true,
                review3: true,
                review4: true,
                review5: true,
                review6: true,
                review7: true,
                review8: true,
                review9: true,
                review10: true,
                review11: true,
                review12: true,
                review13: true,
                review14: true,
                review15: true,
                review16: true,
                review17: true,
                review18: true,
                review19: true,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const reviewService = new ReviewService();