module.exports = {
  // GitHub Pages uden eget domæne serverer siden fra /<repo-navn>/
  publicPath: process.env.NODE_ENV === 'production' ? '/programming-jokes.dk/' : '/',
  transpileDependencies: []
}
