function selectSaleItems(items) {
  return items.filter((name) => {
  return name.discount > 0 
 })
}

module.exports = selectSaleItems
