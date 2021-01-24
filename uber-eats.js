const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-fullscreen'] });  // --> <<Browser>>
  const page = await browser.newPage();  // --> <<Page>>
  await page.goto('https://www.ubereats.com/');
  const button = await page.waitForSelector('a[data-test="header-sign-in"]', {
    visible: true,
  });                                       // --> <<Button>>
  await Promise.all([
    await button.click(),
    page.waitForNavigation({waitUntil:'networkidle2'})
    ]);
  const username = await page.waitForSelector('input[name="textInputValue"]');    // --> <<Username>>
  await username.type("dev.michael.valentine@gmail.com");
  await page.waitForTimeout(1000);
  const nextButton = await page.waitForSelector('button[class="btn btn--arrow btn--full"]', {
    visible: true,
  });                                                                 // -->  <<Username Button>>
  await Promise.all([
    await nextButton.click(),
    page.waitForNavigation({waitUntil:'networkidle2'})
    ]);
  const password = await page.waitForSelector('input[name="password"]');     // -->  <<Password>>
  await password.type("A.a.12345");
  await page.waitForTimeout(1000);
  const passwordButton = await page.waitForSelector('button[class="btn btn--arrow btn--full push--top"]', {
    visible: true,
  });                                   // --> <<Password Button>>
  await Promise.all([
    passwordButton.click(),
    page.waitForNavigation({waitUntil:'networkidle2'})
    ]);
  // const locationButton = await page.waitForSelector('a[class="ca cb cc bc cd ce cf cg ch ag be bf bj ci cj ck ba"]', {
  //   visible: true,
  // });                                    //  --> <<Location Button>>
  // await locationButton.click();    
  // const changelocation = await page.waitForSelector('a[class="bc cd ce cf cg ch ca cb cc ag io cj ka bf ba g5 d1"]');                                 //  --> <<Change Location Button>>
  // await Promise.all([
  //   changelocation.click()
  //   ]); 
  // const location = await page.waitForSelector('input[name="searchTerm"]', {
  //   visible: true,
  //   timeout: 3000
  // });      // -->  <<Location>>

  // //console.log("hello",location);
  // await location.click();
  // await location.type("CN Tower");
  const searchBar = await page.waitForSelector('#search-suggestions-typeahead-input');  // --> <<Search Bar>>
  await searchBar.type("Pizza pizza");
  await Promise.all([
    page.keyboard.press('Enter'),
    page.waitForNavigation({waitUntil:'networkidle2'})
    ]);
  // const pizzaPizza = await page.$x("//p[contains(., 'Pizza Pizza (Blue Jays & Front)')]");
  // const pizzaPizza = page.$eval('p', (element) => {
  //   return 'element'.innerHTML
  // });
  // console.log("hello",pizzaPizza);
  // await pizzaPizza.click();
  // const innerText = await page.evaluate(() => document.querySelector('p').innerText);
  //const pizzaPizza = await page.$x("//p[text()='King Taps']");
  //const pizzaPizza = await page.$eval('Pizza Pizza (Blue Jays &amp; Front)', element => element.innerHTML);
  await page.evaluate(() => {
    const elements = [...document.querySelectorAll('p')];
    console.log("elements",elements);
    const element = elements.find(element => element.innerHTML === '<p>Pizza Pizza (Blue Jays &amp; Front)</p>');
    element.click();
  });
  console.log("hello",element);
  
  

  // const topChoice = await page.waitForSelector('#main-content > div > div > div.ba.c9.bn.ev.dz.e0.e1.e2 > div > div.fu.je.fw.fx.fy.fz > div:nth-child(2) > div > figure > a'); // --> <<Top choice>>
  // await Promise.all([
  //   topChoice.click(),
  //   page.waitForNavigation({waitUntil:'networkidle2'})
  //   ]);
  // const signaturePizzas = await page.waitForSelector('#main-content > div.b7.b8.b9.ba.bb > div:nth-child(2) > div > div > div > div > nav > div:nth-child(6) > button');  // --> <<Signature Pizzas>>
  // signaturePizzas.click();
  // await page.waitForTimeout(1000);
  // const thirdChoice = await page.waitForSelector('#main-content > div.b7.b8.b9.ba.bb > ul > li:nth-child(6) > ul > li:nth-child(3) > div > div > div > div.ag.cu.ah.cw > div.c9 > h4 > div');  // --> <<Third Choice>>
  // thirdChoice.click();
  // await page.waitForTimeout(1000);
  // await page.click("")
  // //const large = await page.waitForSelector('input[name="9dc2ba7f-4dd3-5cd8-a250-7e14fa66d049+0"]');   // -->  <<Large>>
  // const large = await page.waitForSelector('#wrapper > div:nth-child(6) > div > div > div.b9.af.bd > div.af.mp > ul > li:nth-child(1) > div > div.c4 > label:nth-child(8) > div.cu.ag.e4.k8 > div.ag.cu.ah.g5.n0 > div > div.ca.cb.cc');   // -->  <<Large>>
  // large.click();
  // const addOrder = await page.waitForSelector('#wrapper > div:nth-child(6) > div > div > div.b9.af.bd > div.af.mp > div.ag.be.bf.e4.c4.em.dr.n4 > button'); //--> <<Add Order>>
  // await Promise.all([
  //   addOrder.click(),
  //   page.waitForNavigation({waitUntil:'networkidle2'})
  //   ]);
  // const checkout = await page.waitForSelector('#wrapper > div.it.af > header > div.b7.b8.b9.ba.bb.bc.bd > div > div.dg.ag.dh.bf > div.bs.nn.no.np.bk.bd.de.nq.l2 > div > div.nt > div.c4.ai.dr.bu.d9.n4 > a'); // --> <<Checkout>>
  // await Promise.all([
  //   checkout.click(),
  //   page.waitForNavigation({waitUntil:'networkidle2'})
  //   ]);
  
})();

