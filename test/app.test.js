test("dashboard page is served", async () => {
  const server = app.listen(0);
  try {
    const address = server.address();
    const response = await fetch(`http://127.0.0.1:${address.port}/`);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(html, /CloudDesk/);
    assert.match(html, /CloudDesk is Live!/);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});