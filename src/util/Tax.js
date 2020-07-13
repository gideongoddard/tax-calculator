const Tax = {
    calculateTax (scotland, income) {

        // Not Scotland
        if (scotland === false) {

            // Upper bounds of each tax band >> Additional rate has no upper bound.
            let upperPA = 12500;
            let upperBasic = 50000;
            let upperHigher = 150000;

            // Percentage rates of each tax band >> Personal allowance is not taxed.
            let basicRate = 20;
            let higherRate = 40;
            let additionalRate = 45;

            // Income breakdown variables
            let basicAmount;
            let higherAmount;
            let additionalAmount;

            // Tax breakdown variables
            let personalAllowanceTax;
            let basicTax;
            let higherTax;
            let additionalTax;
            let totalTax;
            
            // Personal allowance
            if (income <= upperPA) {
                return {
                    personalAllowanceAmount: income,
                    personalAllowanceTax: 0,
                    basicAmount: 0,
                    basicTax: 0,
                    higherAmount: 0,
                    higherTax: 0,
                    additionalAmount: 0,
                    additionalTax: 0,
                    totalIncome: income,
                    totalTax: 0,
                    scotPersonalAllowanceAmount: 0,
                    scotPersonalAllowanceTax: 0,
                    scotStarterAmount: 0,
                    scotStarterTax: 0,
                    scotBasicAmount: 0,
                    scotBasicTax: 0,
                    scotIntermediateAmount: 0,
                    scotIntermediateTax: 0,
                    scotHigherAmount: 0,
                    scotHigherTax: 0,
                    scotTopAmount: 0,
                    scotTopTax: 0,
                    scotTotalIncome: 0,
                    scotTotalTax: 0
                }

            // Basic rate
            } else if (income <= upperBasic && income > upperPA) {
                basicAmount = income - upperPA;
                basicTax = (basicAmount * basicRate) / 100;
                return {
                    personalAllowanceAmount: upperPA,
                    personalAllowanceTax: 0,
                    basicAmount: basicAmount,
                    basicTax: basicTax,
                    higherAmount: 0,
                    higherTax: 0,
                    additionalAmount: 0,
                    additionalTax: 0,
                    totalIncome: income,
                    totalTax: basicTax,
                    scotPersonalAllowanceAmount: 0,
                    scotPersonalAllowanceTax: 0,
                    scotStarterAmount: 0,
                    scotStarterTax: 0,
                    scotBasicAmount: 0,
                    scotBasicTax: 0,
                    scotIntermediateAmount: 0,
                    scotIntermediateTax: 0,
                    scotHigherAmount: 0,
                    scotHigherTax: 0,
                    scotTopAmount: 0,
                    scotTopTax: 0,
                    scotTotalIncome: 0,
                    scotTotalTax: 0
                }

            // Higher rate
            } else if (income <= upperHigher && income > upperBasic) {
                if (income > 125000) {
                    personalAllowanceTax = (upperPA * basicRate) / 100;
                } else {
                    personalAllowanceTax = 0;
                }
                basicAmount = upperBasic - upperPA;
                basicTax = (basicAmount * basicRate) / 100;
                higherAmount = income - upperBasic;
                higherTax = (higherAmount * higherRate) / 100;
                totalTax = personalAllowanceTax + basicTax + higherTax;
                return {
                    personalAllowanceAmount: upperPA,
                    personalAllowanceTax: personalAllowanceTax,
                    basicAmount: basicAmount,
                    basicTax: basicTax,
                    higherAmount: higherAmount,
                    higherTax: higherTax,
                    additionalAmount: 0,
                    additionalTax: 0,
                    totalIncome: income,
                    totalTax: totalTax,
                    scotPersonalAllowanceAmount: 0,
                    scotPersonalAllowanceTax: 0,
                    scotStarterAmount: 0,
                    scotStarterTax: 0,
                    scotBasicAmount: 0,
                    scotBasicTax: 0,
                    scotIntermediateAmount: 0,
                    scotIntermediateTax: 0,
                    scotHigherAmount: 0,
                    scotHigherTax: 0,
                    scotTopAmount: 0,
                    scotTopTax: 0,
                    scotTotalIncome: 0,
                    scotTotalTax: 0
                }

            // Additional rate
            } else if (income > upperHigher) {
                personalAllowanceTax = (upperPA * basicRate) / 100;
                basicAmount = upperBasic - upperPA;
                basicTax = (basicAmount * basicRate) / 100;
                higherAmount = upperHigher - upperBasic;
                higherTax = (higherAmount * higherRate) / 100;
                additionalAmount = income - upperHigher;
                additionalTax = (additionalAmount * additionalRate) / 100;
                totalTax = personalAllowanceTax + basicTax + higherTax + additionalTax;
                return {
                    personalAllowanceAmount: upperPA,
                    personalAllowanceTax: personalAllowanceTax,
                    basicAmount: basicAmount,
                    basicTax: basicTax,
                    higherAmount: higherAmount,
                    higherTax: higherTax,
                    additionalAmount: additionalAmount,
                    additionalTax: additionalTax,
                    totalIncome: income,
                    totalTax: totalTax,
                    scotPersonalAllowanceAmount: 0,
                    scotPersonalAllowanceTax: 0,
                    scotStarterAmount: 0,
                    scotStarterTax: 0,
                    scotBasicAmount: 0,
                    scotBasicTax: 0,
                    scotIntermediateAmount: 0,
                    scotIntermediateTax: 0,
                    scotHigherAmount: 0,
                    scotHigherTax: 0,
                    scotTopAmount: 0,
                    scotTopTax: 0,
                    scotTotalIncome: 0,
                    scotTotalTax: 0
                }
            }

        // Scotland
        } else if (scotland === true) {

            // Upper bounds of Scottish bands
            let upperScotPA = 12500;
            let upperScotStarter = 14585;
            let upperScotBasic = 25158;
            let upperScotIntermediate = 43430;
            let upperScotHigher = 150000;

            // Percentage rates of Scottish bands
            let scotStarterRate = 19;
            let scotBasicRate = 20;
            let scotIntermediateRate = 21;
            let scotHigherRate = 41;
            let scotTopRate = 46;

            // Scotland income breakdown variables
            let scotStarterAmount;
            let scotBasicAmount;
            let scotIntermediateAmount;
            let scotHigherAmount;
            let scotTopAmount;

            // Scotland tax breakdown variables
            let scotPersonalAllowanceTax;
            let scotStarterTax;
            let scotBasicTax;
            let scotIntermediateTax;
            let scotHigherTax;
            let scotTopTax;
            let scotTotalTax;

            // Personal allowance
            if (income <= upperScotPA) {
                return {
                    personalAllowanceAmount: 0,
                    personalAllowanceTax: 0,
                    basicAmount: 0,
                    basicTax: 0,
                    higherAmount: 0,
                    higherTax: 0,
                    additionalAmount: 0,
                    additionalTax: 0,
                    totalIncome: 0,
                    totalTax: 0,
                    scotPersonalAllowanceAmount: income,
                    scotPersonalAllowanceTax: 0,
                    scotStarterAmount: 0,
                    scotStarterTax: 0,
                    scotBasicAmount: 0,
                    scotBasicTax: 0,
                    scotIntermediateAmount: 0,
                    scotIntermediateTax: 0,
                    scotHigherAmount: 0,
                    scotHigherTax: 0,
                    scotTopAmount: 0,
                    scotTopTax: 0,
                    scotTotalIncome: income,
                    scotTotalTax: 0
                }

            // Starter rate
            } else if (income <= upperScotStarter && income > upperScotPA) {
                scotStarterAmount = income - upperScotPA;
                scotStarterTax = (scotStarterAmount * scotStarterRate) / 100;
                scotTotalTax = scotStarterTax;
                console.log(scotStarterTax, scotTotalTax);
                return {
                    personalAllowanceAmount: 0,
                    personalAllowanceTax: 0,
                    basicAmount: 0,
                    basicTax: 0,
                    higherAmount: 0,
                    higherTax: 0,
                    additionalAmount: 0,
                    additionalTax: 0,
                    totalIncome: 0,
                    totalTax: 0,
                    scotPersonalAllowanceAmount: upperScotPA,
                    scotPersonalAllowanceTax: 0,
                    scotStarterAmount: scotStarterAmount,
                    scotStarterTax: scotStarterTax,
                    scotBasicAmount: 0,
                    scotBasicTax: 0,
                    scotIntermediateAmount: 0,
                    scotIntermediateTax: 0,
                    scotHigherAmount: 0,
                    scotHigherTax: 0,
                    scotTopAmount: 0,
                    scotTopTax: 0,
                    scotTotalIncome: income,
                    scotTotalTax: scotTotalTax
                }

            // Basic rate
            } else if (income <= upperScotBasic && income > upperScotStarter) {
                scotStarterAmount = upperScotStarter - upperScotPA;
                scotStarterTax = (scotStarterAmount * scotStarterRate) / 100;
                scotBasicAmount = income - upperScotStarter;
                scotBasicTax = (scotBasicAmount * scotBasicRate) / 100;
                scotTotalTax = scotStarterTax + scotBasicTax;
                return {
                    personalAllowanceAmount: 0,
                    personalAllowanceTax: 0,
                    basicAmount: 0,
                    basicTax: 0,
                    higherAmount: 0,
                    higherTax: 0,
                    additionalAmount: 0,
                    additionalTax: 0,
                    totalIncome: 0,
                    totalTax: 0,
                    scotPersonalAllowanceAmount: upperScotPA,
                    scotPersonalAllowanceTax: 0,
                    scotStarterAmount: scotStarterAmount,
                    scotStarterTax: scotStarterTax,
                    scotBasicAmount: scotBasicAmount,
                    scotBasicTax: scotBasicTax,
                    scotIntermediateAmount: 0,
                    scotIntermediateTax: 0,
                    scotHigherAmount: 0,
                    scotHigherTax: 0,
                    scotTopAmount: 0,
                    scotTopTax: 0,
                    scotTotalIncome: income,
                    scotTotalTax: scotTotalTax
                }

            // Intermediate rate
            } else if (income <= upperScotIntermediate && income > upperScotBasic) {
                scotStarterAmount = upperScotStarter - upperScotPA;
                scotStarterTax = (scotStarterAmount * scotStarterRate) / 100;
                scotBasicAmount = upperScotBasic - upperScotStarter;
                scotBasicTax = (scotBasicAmount * scotBasicRate) / 100;
                scotIntermediateAmount = income - upperScotBasic;
                scotIntermediateTax = (scotIntermediateAmount * scotIntermediateRate) / 100;
                scotTotalTax = scotStarterTax + scotBasicTax + scotIntermediateTax;
                return {
                    personalAllowanceAmount: 0,
                    personalAllowanceTax: 0,
                    basicAmount: 0,
                    basicTax: 0,
                    higherAmount: 0,
                    higherTax: 0,
                    additionalAmount: 0,
                    additionalTax: 0,
                    totalIncome: 0,
                    totalTax: 0,
                    scotPersonalAllowanceAmount: upperScotPA,
                    scotPersonalAllowanceTax: 0,
                    scotStarterAmount: scotStarterAmount,
                    scotStarterTax: scotStarterTax,
                    scotBasicAmount: scotBasicAmount,
                    scotBasicTax: scotBasicTax,
                    scotIntermediateAmount: scotIntermediateAmount,
                    scotIntermediateTax: scotIntermediateTax,
                    scotHigherAmount: 0,
                    scotHigherTax: 0,
                    scotTopAmount: 0,
                    scotTopTax: 0,
                    scotTotalIncome: income,
                    scotTotalTax: scotTotalTax
                }

            // Higher rate
            } else if (income <= upperScotHigher && income > upperScotIntermediate) {
                if (income > 125000) {
                    scotPersonalAllowanceTax = (upperScotPA * scotStarterRate) / 100;
                } else {
                    scotPersonalAllowanceTax = 0;
                }
                scotStarterAmount = upperScotStarter - upperScotPA;
                scotStarterTax = (scotStarterAmount * scotStarterRate) / 100;
                scotBasicAmount = upperScotBasic - upperScotStarter;
                scotBasicTax = (scotBasicAmount * scotBasicRate) / 100;
                scotIntermediateAmount = upperScotIntermediate - upperScotBasic;
                scotIntermediateTax = (scotIntermediateAmount * scotIntermediateRate) / 100;
                scotHigherAmount = income - upperScotIntermediate;
                scotHigherTax = (scotHigherAmount * scotHigherRate) / 100;
                scotTotalTax = scotPersonalAllowanceTax + scotStarterTax + scotBasicTax + scotIntermediateTax + scotHigherTax;
                return {
                    personalAllowanceAmount: 0,
                    personalAllowanceTax: 0,
                    basicAmount: 0,
                    basicTax: 0,
                    higherAmount: 0,
                    higherTax: 0,
                    additionalAmount: 0,
                    additionalTax: 0,
                    totalIncome: 0,
                    totalTax: 0,
                    scotPersonalAllowanceAmount: upperScotPA,
                    scotPersonalAllowanceTax: scotPersonalAllowanceTax,
                    scotStarterAmount: scotStarterAmount,
                    scotStarterTax: scotStarterTax,
                    scotBasicAmount: scotBasicAmount,
                    scotBasicTax: scotBasicTax,
                    scotIntermediateAmount: scotIntermediateAmount,
                    scotIntermediateTax: scotIntermediateTax,
                    scotHigherAmount: scotHigherAmount,
                    scotHigherTax: scotHigherTax,
                    scotTopAmount: 0,
                    scotTopTax: 0,
                    scotTotalIncome: income,
                    scotTotalTax: scotTotalTax
                }

            // Top rate
            } else if (income > upperScotHigher) {
                scotPersonalAllowanceTax = (upperScotPA * scotStarterRate) / 100;
                scotStarterAmount = upperScotStarter - upperScotPA;
                scotStarterTax = (scotStarterAmount * scotStarterRate) / 100;
                scotBasicAmount = upperScotBasic - upperScotStarter;
                scotBasicTax = (scotBasicAmount * scotBasicRate) / 100;
                scotIntermediateAmount = upperScotIntermediate - upperScotBasic;
                scotIntermediateTax = (scotIntermediateAmount * scotIntermediateRate) / 100;
                scotHigherAmount = upperScotHigher - upperScotIntermediate;
                scotHigherTax = (scotHigherAmount * scotHigherRate) / 100;
                scotTopAmount = income - upperScotHigher;
                scotTopTax = (scotTopAmount * scotTopRate) / 100;
                scotTotalTax = scotPersonalAllowanceTax + scotStarterTax + scotBasicTax + scotIntermediateTax + scotHigherTax + scotTopTax;
                return {
                    personalAllowanceAmount: 0,
                    personalAllowanceTax: 0,
                    basicAmount: 0,
                    basicTax: 0,
                    higherAmount: 0,
                    higherTax: 0,
                    additionalAmount: 0,
                    additionalTax: 0,
                    totalIncome: 0,
                    totalTax: 0,
                    scotPersonalAllowanceAmount: upperScotPA,
                    scotPersonalAllowanceTax: scotPersonalAllowanceTax,
                    scotStarterAmount: scotStarterAmount,
                    scotStarterTax: scotStarterTax,
                    scotBasicAmount: scotBasicAmount,
                    scotBasicTax: scotBasicTax,
                    scotIntermediateAmount: scotIntermediateAmount,
                    scotIntermediateTax: scotIntermediateTax,
                    scotHigherAmount: scotHigherAmount,
                    scotHigherTax: scotHigherTax,
                    scotTopAmount: scotTopAmount,
                    scotTopTax: scotTopTax,
                    scotTotalIncome: income,
                    scotTotalTax: scotTotalTax
                }
            } else {
                return 'Invalid input';
            }
        } else {
            return 'Invalid input';
        }
    }
}

export default Tax;