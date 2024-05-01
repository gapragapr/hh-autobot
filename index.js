import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        userDataDir: '/home/gapragapr/projects/puppeteer/1/profile',
        channel: 'chrome',
        args: [`--window-size=1440,1200`],
        defaultViewport: {
          width: 1440,
          height: 1200
        },
        executablePath: '/usr/bin/google-chrome'
    })

    const page = await browser.newPage()

    await page.goto('https://hh.ru/', {
        waitUntil: 'domcontentloaded'
    })

    console.log('Скрипт запущен ' + new Date())

    const myResumeButton = await page.$('[data-qa=mainmenu_myResumes]')

    if (myResumeButton) {
        await myResumeButton.click()
    }

    await page.waitForNavigation({
        waitUntil: 'domcontentloaded'
    })

    const updateResumeButton = await page.$('[data-qa=resume-update-button_actions]')

    if (updateResumeButton) {
        await updateResumeButton.click()
    }

    console.log('Скрипт выполнен ' + new Date())

    await browser.close()
})();