const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

const from = "Seattle";
const to = "Las Vegas";
const leaveDate = "5-15-2023"; // mm-dd-yyyy format

const URL = `https://www.google.co.in/travel/flights`;

async function getFlightsFromPage(page) {
  return await page.evaluate(() =>
    Array.from(document.querySelectorAll(".pIav2d")).map((el) => {
      const thumbnailString = el
        .querySelector(".EbY4Pc")
        ?.getAttribute("style");
      const startIndex = thumbnailString?.indexOf("url(");
      const endIndex = thumbnailString?.indexOf(";");
      const thumbnail =
        thumbnailString
          ?.slice(startIndex + 4, endIndex - 1)
          .replaceAll("\\", "") || "No thumbnail";
      const layover = el
        .querySelector(".BbR8Ec .sSHqwe")
        ?.getAttribute("aria-label");
      return {
        thumbnail,
        companyName: el.querySelector(".Ir0Voe .sSHqwe")?.textContent.trim(),
        description: el.querySelector(".mv1WYe")?.getAttribute("aria-label"),
        duration: el.querySelector(".gvkrdb")?.textContent.trim(),
        airportLeave: el
          .querySelectorAll(".Ak5kof .sSHqwe .eoY5cb")[0]
          ?.textContent.trim(),
        airportArive: el
          .querySelectorAll(".Ak5kof .sSHqwe .eoY5cb")[1]
          ?.textContent.trim(),
        layover: layover || "Nonstop",
        // emisions: el
        //   .querySelector(".V1iAHe > div")
        //   ?.getAttribute("aria-label")
        //   .replace(". Learn more about this emissions estimate", " "),
        price: el.querySelector(".U3gSDe .YMlIz > span")?.textContent.trim(),
        priceDescription: el
          .querySelector(".U3gSDe .JMnxgf > span > span > span")
          ?.getAttribute("aria-label"),
      };
    })
  );
}

async function getFlightsResults(origin, destination, startDate, endDate) {
  //   const browser = await puppeteer.launch({
  //     headless: false, // if you want to see what the browser is doing, you need to change this option to "false"
  //     args: ["--no-sandbox", "--disable-setuid-sandbox"],
  //   });

  //   const page = await browser.newPage();
  //   page.setViewport({
  //     width: 1280,
  //     height: 720,
  //   });
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(URL);

  await page.waitForSelector(".e5F5td");
  const inputs = await page.$$(".e5F5td");

  // type "from"
  await inputs[0].click();
  await page.waitForTimeout(1000);
  await page.keyboard.type(origin);
  await page.keyboard.press("Enter");

  // type "to"
  await inputs[1].click();
  await page.waitForTimeout(1000);
  await page.keyboard.type(destination);
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);

  // press "Done"
  await page.click(
    "button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc.nCP5yc.AjY5Oe.LQeN7.TUT4y.zlyfOd"
  );
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");

  const dateInputs = await page.$$("input.TP4Lpb.eoY5cb.j0Ppje");

  await dateInputs[2].click();
  await page.waitForTimeout(1000);
  await page.keyboard.type(startDate);
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);

  // type "Leave date"
  await dateInputs[3].click();
  await page.waitForTimeout(1000);
  await page.keyboard.type(endDate);
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);

  // press "Done"
  await page.click(
    "button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc.nCP5yc.AjY5Oe.LQeN7.TUT4y.zlyfOd"
  );
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");

  //   await page.waitForSelector(".pIav2d");
  await page.waitForSelector(".Rk10dc");

  const flights = await getFlightsFromPage(page);
  console.log(flights);
  await page.waitForTimeout(4000);
  await browser.close();

  return flights;
}
module.exports = getFlightsResults;
