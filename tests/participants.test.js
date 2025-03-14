require("dotenv").config()

test("Get to participants/v1/champion should return 200", async () => {
    const res = await fetch(`${process.env.URL}/participants/v1/champion`)

    expect(res.status).toBe(200);
    const body = await res.json()

    expect(body).not.toBeNull();
    expect(body.min.length).toEqual(1);
    expect(body.max.length).toEqual(1);

    expect(body.min[0].producer).toEqual("Bo Derek");
    expect(body.min[0].interval).toEqual(6);
    expect(body.min[0].previousWin).toEqual(1984);
    expect(body.min[0].followingWin).toEqual(1990);


    expect(body.max[0].producer).toEqual("Matthew Vaughn");
    expect(body.max[0].interval).toEqual(13);
    expect(body.max[0].previousWin).toEqual(2002);
    expect(body.max[0].followingWin).toEqual(2015);

})