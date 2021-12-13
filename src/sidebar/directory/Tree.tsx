// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'
import { File } from './File'
import { Folder } from './Folder'


export const Tree = ({treeData, parentFolder}: Props) => {
  return (
    <ul class='no-bullets'>
      {treeData.map((tree) => {
        if (tree.type === 'blob') {
          return (
            <File tree={tree} parentFolder={parentFolder} />
          )
        }
        if (tree.type === 'tree') {
          return (
            <Folder tree={tree} parentFolder={parentFolder}/>
          )
        }
      })}
    </ul>
  )
}

interface Props {
  treeData: TreeAPI[]
  parentFolder: string
}