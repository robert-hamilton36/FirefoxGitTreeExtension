export const fetchTreeFromFolderURL = (url: string): Promise<TreeAPI[]> => {
  return fetch(url)
  .then(async (response) => {
    const jason = await response.json()
    return jason.tree
  })
  .catch(e => console.log('error: ' + e))
}

export const fetchReposMainBranch = (user: string, repo: string): Promise<string> => {
  const url = `https://api.github.com/repos/${user}/${repo}`
  return fetch(url)
    .then(async (response) => {
      const jason = await response.json()
      return(jason.default_branch)
    })
    .catch(e => console.log('error: ' + e))
}

export const fetchBranch = (user: string, repo: string, branch: string): Promise<TreeAPI[]> => {
  const url = `https://api.github.com/repos/${user}/${repo}/git/trees/${branch}`
  return fetch(url)
    .then(async (response) => {
      const jason = await response.json()
      return(jason.tree)
    })
    .catch(e => console.log('error: ' + e))
}
