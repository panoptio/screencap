## Purpose:

This utility is written to replace previous iterations of a screen scraping tool that were based on both PhantomJS and CasperJS.  This is used by a client to output screenshots of operational dashboards for rolling through a custom https://dashplay.io.

## Requirements:

* NodeJS: >= 8.x
* Puppeteer
* Chromium-Headless

## Configuration:

Create a credentials file called `creds.js` in the root of the project.  It should look as follows:

```javascript
module.exports = {
        accountid: '0011223344',
        username: 'email@domain.com',
        password: 's0m3r4nd0mp4ssw0rd'
}
```

In the `screenshot.js` file, you will define dashboard elements in a dictionary called `dashboards {}`.  The dictionary is defined as:

`"dashboard_id" : "output_image_name"`

## Running:

To execute, you simply execute:

`node screenshot`