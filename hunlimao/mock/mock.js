module.exports = {
  rules: [
    {
      pattern: /\/api\/getlivelist.php/,
      respondwith: './livelist.json'
    },
    {
      pattern: /\/api\/getDetail.php\?id=1$/,
      respondwith: './detail-1.json'
    },
    {
      pattern: /\/api\/getDetail.php\?id=2$/,
      respondwith: './detail-2.json'
    },
    {
      pattern: /\/api\/getDetail.php\?id=3$/,
      respondwith: './detail-3.json'
    }
  ]
}
