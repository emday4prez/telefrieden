const setupTags = blogs => {
  const allTags = {}

  const labels = blogs.map(post => post.labels).flat()

  labels.forEach(tag => {
    if (allTags[tag]) {
      allTags[tag] = allTags[tag] + 1
    } else {
      allTags[tag] = 1
    }
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    return b[1] - a[1]
  })

  return newTags
}

export default setupTags
// {
//       if (allTags[tag]) {
//         allTags[tag] = allTags[tag] + 1
//       } else {
//         allTags[tag] = 1
//       }
//     }
