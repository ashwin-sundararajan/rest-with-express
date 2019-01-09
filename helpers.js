let data = [
  {
    id: 1,
    title: 'REST Architecture 101',
    content: 'Lorem ipsum dolor sit amet'
  },
  {
    id: 2,
    title: 'Express.js',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

module.exports = {
  getPosts() {
    return data
  },

  getPost(id) {
    return data.find(post => post.id === id)
  },

  addPost(post) {
    const newPost = Object.assign(
      {
        id: Date.now()
      },
      post
    )

    data = [...data, newPost]

    return newPost
  },

  editPost(id, contents) {
    let updated = false
    data = data.map(post => {
      if (post.id === id) {
        updated = true
        return Object.assign({}, post, contents)
      }

      return post
    })
    return updated
  },

  deletePost(id) {
    let totalPosts = data.length
    data = data.filter(post => post.id !== id)
    return totalPosts !== data.length
  }
}
