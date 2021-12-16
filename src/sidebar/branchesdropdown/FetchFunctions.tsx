export const fetchReposBranches = (user: string, repo: string): Promise<string[]> => {
  const url = `https://api.github.com/repos/${user}/${repo}/branches`
  console.log('fetchReposBranches')
  return fetch(url)
  .then(async (response) => {
    const jason = await response.json()
    const branchNames = jason.map((branch: Branch) => branch?.name)
    return branchNames
  })
  .catch(e => console.log('error: ' + e))
}

interface Branch{
  name: string
  commit: { 
    sha: string
    url: string
  }
  protected: boolean
}