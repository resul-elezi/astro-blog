export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  
  export function formatDate(date) {
    return new Date(date).toLocaleDateString('de', {
      timeZone: "UTC",
    })
  }

  export function formatBlogPosts(posts, {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}) {
    const filteredPosts = posts.reduce((acc, post) => {
      const { date, draft } = post.frontmatter;
      // filterOutDrafts if true
      if(filterOutDrafts && draft) return acc;

      // filterOutFuturePosts if true
      if(filterOutFuturePosts && new Date(date) > new Date()) return acc;
    }, []);
  }