const https = require('https');
https.get('https://my.spline.design/genkubgreetingrobot-eZTR3Gu4jf05pfN6UIwg6sne/', (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
        // Find all URLs in the page
        const urls = data.match(/https?:\/\/[^\s'"<>]+/gi) || [];
        const splineUrls = urls.filter(u => u.includes('spline') || u.includes('prod'));
        splineUrls.forEach(u => console.log(u));
    });
});
