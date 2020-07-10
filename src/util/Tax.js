const Tax = {
    calculateTax (scotland, income) {
        let incomeTax;

        // Upper bounds of each tax band >> Additional rate has no upper bound.
        let upperPA = 12500;
        let upperBasic = 50000;
        let upperHigher = 150000;

        // Percentage rates of each tax band >> Personal allowance is not taxed.
        let basicRate = 20;
        let higherRate = 40;
        let additionalRate = 45;

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

        // Income within personal allowance (incl. Scotland)
        if (income <= upperPA) {
            incomeTax = 0;
            return incomeTax;

        // Not Scotland
        } else if (scotland === 'no') {

            // Basic rate
            if (income > upperPA && income <= upperBasic) {
                let basicAmount = income - upperPA;
                let basicTax = (basicAmount * basicRate) / 100;
                incomeTax = basicTax;
                return incomeTax;

            // Higher rate
            } else if (income > upperBasic && income <= upperHigher) {
                let lostAllowanceTax = 0;
                if (income > 125000) {
                    lostAllowanceTax = (upperPA * basicRate) / 100;
                }
                let basicTax = ((upperBasic - upperPA) * basicRate) / 100;
                let higherAmount = income - upperBasic;
                let higherTax = (higherAmount * higherRate) / 100;
                incomeTax = basicTax + higherTax + lostAllowanceTax;
                return incomeTax;

            // Additional rate
            } else if (income > upperHigher) {
                let lostAllowanceTax = (upperPA * basicRate) / 100;
                let basicTax = ((upperBasic - upperPA) * basicRate) / 100;
                let higherTax = ((upperHigher - upperBasic) * higherRate) / 100;
                let additionalAmount = income - upperHigher;
                let additionalTax = (additionalAmount * additionalRate) / 100;
                incomeTax = basicTax + higherTax + additionalTax + lostAllowanceTax;
                return incomeTax;
            } else {
                return 'Invalid input';
            }

        // Scotland
        } else if (scotland === 'yes') {

            // Starter rate
            if (income > upperScotPA && income <= upperScotStarter) {
                let scotStarterAmount = income - upperScotPA;
                let scotStarterTax = (scotStarterAmount * scotStarterRate) / 100;
                incomeTax = scotStarterTax;
                return incomeTax;

            // Basic rate
            } else if (income > upperScotStarter && income <= upperScotBasic) {
                let scotStarterTax = ((upperScotStarter - upperScotPA) * scotStarterRate) / 100;
                let scotBasicAmount = income - upperScotStarter;
                let scotBasicTax = (scotBasicAmount * scotBasicRate) / 100;
                incomeTax = scotStarterTax + scotBasicTax;
                return incomeTax;

            // Intermediate rate
            } else if (income > upperScotBasic && income <= upperScotIntermediate) {
                let scotStarterTax = ((upperScotStarter - upperScotPA) * scotStarterRate) / 100;
                let scotBasicTax = ((upperScotBasic - upperScotStarter) * scotBasicRate) / 100;
                let scotIntermediateAmount = income - upperScotBasic;
                let scotIntermediateTax = (scotIntermediateAmount * scotIntermediateRate) / 100;
                incomeTax = scotStarterTax + scotBasicTax + scotIntermediateTax;
                return incomeTax;

            // Higher rate
            } else if (income > upperScotIntermediate && income <= upperScotHigher) {
                let scotLostAllowanceTax = 0;
                if (income > 125000) {
                    scotLostAllowanceTax = (upperPA * basicRate) / 100;
                }
                let scotStarterTax = ((upperScotStarter - upperScotPA) * scotStarterRate) / 100;
                let scotBasicTax = ((upperScotBasic - upperScotStarter) * scotBasicRate) / 100;
                let scotIntermediateTax = ((upperScotIntermediate - upperScotBasic) * scotIntermediateRate) / 100;
                let scotHigherAmount = income - upperScotIntermediate;
                let scotHigherTax = (scotHigherAmount * scotHigherRate) / 100;
                incomeTax = scotStarterTax + scotBasicTax + scotIntermediateTax + scotHigherTax + scotLostAllowanceTax;
                return incomeTax;

            // Top rate
            } else if (income > upperScotHigher) {
                let scotLostAllowanceTax = (upperScotPA * scotStarterRate) / 100;
                let scotStarterTax = ((upperScotStarter - upperScotPA) * scotStarterRate) / 100;
                let scotBasicTax = ((upperScotBasic - upperScotStarter) * scotBasicRate) / 100;
                let scotIntermediateTax = ((upperScotIntermediate - upperScotBasic) * scotIntermediateRate) / 100;
                let scotHigherTax = ((upperScotHigher - upperScotBasic) * scotHigherRate) / 100;
                let scotTopAmount = income - upperScotHigher;
                let scotTopTax = (scotTopAmount * scotTopRate) / 100;
                incomeTax = scotStarterTax + scotBasicTax + scotIntermediateTax + scotHigherTax + scotTopTax + scotLostAllowanceTax;
                return incomeTax;
            } else {
                return 'Invalid input';
            }
        } else {
            return 'Invalid input';
        }
    }
}

export default Tax;