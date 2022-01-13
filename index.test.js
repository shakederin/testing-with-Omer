const puppeteer = require("puppeteer")


describe('test suite 1', ()=>{
    let page
    let browser

    it("should open youTube", async ()=>{
        browser = await puppeteer.launch()
        page = await browser.newPage()
        await page.goto('https://www.youtube.com/')
        const url =await page.evaluate(()=>{
            return window.location.hostname
        })
        await browser.close()
        expect(url).toBe("www.youtube.com")
    }, 10000)

})
