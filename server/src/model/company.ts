import { db } from "./db";

class CompanyService {
    async findUnique(company_id: number) {
        const queryResult = await db.company.findUnique({
            where: {
                id: company_id,
            },
            select: {
                id: true,
                name: true,
                img: true,
                grade: true,
                lat: true,
                lng: true,
                phoneNumber: true,
                address: true,
            }
        });

        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const companyService = new CompanyService();