const contributors = [
  // { name: 'namamu', link: 'link_githubmu' },
]

const found = (contributor) => {
  const result = contributors.find((item) => {
    return contributor === item.name
  })
  return result ? true : false
}

module.exports = found
