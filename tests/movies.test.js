require("dotenv").config()

test("Get to movies/v1/nominated/category should return 200", async () => {
    const res = await fetch(`${process.env.URL}/movies/v1/nominated/category`)

    expect(res.status).toBe(200);
    const body = await res.json()

    expect(body).not.toBeNull();
    expect(body.length).toEqual(206);
    expect(body[0].year).toBeDefined();
    expect(body[0].title).toBeDefined();
    expect(body[0].studios).toBeDefined();
    expect(body[0].producers).toBeDefined();
    expect(body[0].winner).toBeDefined();
})