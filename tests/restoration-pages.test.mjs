import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (relativePath) =>
  readFileSync(new URL(relativePath, root), "utf8");

test("restoration and technology routes are present and connected", () => {
  const expectedRoutes = [
    "app/services/dentures/page.tsx",
    "app/services/implant-supported-overdentures/page.tsx",
    "app/services/all-on-4-all-on-x/page.tsx",
    "app/technology/page.tsx",
  ];

  for (const route of expectedRoutes) {
    assert.equal(existsSync(new URL(route, root)), true, `${route} is missing`);
  }

  const services = read("lib/site-config.ts");
  const sitemap = read("app/sitemap.ts");
  const restorationContent = read("lib/restoration-content.ts");
  const rootCanal = read("app/services/root-canal/page.tsx");
  const technology = read("app/technology/page.tsx");

  for (const slug of ["dentures", "implant-supported-overdentures", "all-on-4-all-on-x"]) {
    assert.match(services, new RegExp(`"${slug}"`));
  }

  assert.match(sitemap, /technology/);
  assert.match(technology, /CBCT/);
  assert.match(technology, /microscope/i);
  assert.match(technology, /dental-implants/);
  assert.match(technology, /all-on-4-all-on-x/);
  assert.match(technology, /root-canal/);
  assert.match(restorationContent, /technology/);
  assert.match(rootCanal, /technology/);
});
