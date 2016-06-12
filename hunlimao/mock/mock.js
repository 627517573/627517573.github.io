module.exports = {
  rules: [
    {
      pattern: /\/api\/getlivelist.php/,
      respondwith: './livelist.json'
    },
    {
      pattern: /\/api\/getDetail.php/,
      respondwith: './livelist2.json'
    }
  ]
}
