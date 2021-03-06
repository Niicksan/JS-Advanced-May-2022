function townPopulation(townArray) {
    const towns = {};

    for (const town of townArray) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        let pop = Number(tokens[1]);

        /*
        if (obj.hasOwnProperty(name)) {
            let Objpopulation = obj[name]+population;
            obj[name] = Objpopulation;
        } else {
            obj[name] = population
        }*/

        if (towns[name] != undefined) {
            pop += towns[name];
        }

        towns[name] = pop;
    }

    for (const [name, pop] of Object.entries(towns)) {
        console.log(`${name} : ${pop}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);