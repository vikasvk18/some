test('check gfgObj toEqual', () => {
    let gfgObj = {
        name: "GFG",
        type: "company",
        members: {
            employees: 100,
            contributors: 500
        }
    };

    let testObj = {
        name: "GFG",
        type: "company",
        members: {
            employees: 100,
            contributors: 500
        }
    };
    expect(gfgObj).toEqual(testObj);
});