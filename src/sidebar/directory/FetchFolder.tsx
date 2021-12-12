// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { fetchTreeFromFolderURL } from './FetchFunctions'
import { Tree } from './Tree'

export const FetchFolder = ({url, parentFolder}: Props) => {
  const [tree, setTree] = useState<TreeAPI[]>([])

  useEffect(() => {
    fetchTreeFromFolderURL(url)
    .then(tree => setTree(tree))
  },[])

  return (
    <Tree treeData={tree} parentFolder={parentFolder}/>
  )
}

interface Props {
  url: string
  parentFolder: string
}
