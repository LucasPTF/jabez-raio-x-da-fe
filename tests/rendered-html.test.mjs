import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const variants = [
  ["/a1", "continua voltando ao mesmo lugar?", "Quero descobrir onde estou travado"],
  ["/a2", "precisa de atenção primeiro.", "Quero fazer meu Raio-X"],
  ["/a3", "uma resposta genérica.", "Quero descobrir meu ponto de atenção"],
];

for (const [pathname, headline, cta] of variants) {
  test(`${pathname} renders its hero and the shared sales page`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(headline.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
    assert.match(html, new RegExp(cta.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
    assert.match(html, /Diagnóstico D7E com 21 perguntas/i);
    assert.match(html, /https:\/\/pay\.kiwify\.com\.br\/JcPYHLN/i);
    assert.match(html, /Jabez de Castro/i);
    assert.match(html, /Garantia de 7 dias/i);
  });
}

test("the main URL sends visitors to the strongest hero", async () => {
  const response = await render("/");
  assert.ok([307, 308].includes(response.status));
  assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, "/a1");
});
