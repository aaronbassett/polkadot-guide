import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";
import daos from "../src/data/daos.json";

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 2000, height: 1440 },
  });

  for (const dao of daos) {
    try {
      console.log(`Taking screenshot of ${dao.name}...`);
      const page = await browser.newPage();

      // Navigate to the page and wait for network to be idle
      await page.goto(dao.url, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });

      // Add 5 second delay to ensure page is fully rendered
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Ensure public directory path exists
      const screenshotPath = path.join("public", dao.path);
      const dirPath = path.dirname(screenshotPath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      // Take and save screenshot
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
      });

      await page.close();
      console.log(`✓ Saved screenshot for ${dao.name}`);
    } catch (error) {
      console.error(`Failed to screenshot ${dao.name}:`, error);
    }
  }

  await browser.close();
}

takeScreenshots().catch(console.error);
