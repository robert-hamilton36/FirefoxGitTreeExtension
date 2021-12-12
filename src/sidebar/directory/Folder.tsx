// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'
import { FetchFolder } from './FetchFolder'

export const Folder = ({tree, parentFolder}: Props) => {
  const [folderCollapsed, setFolderCollased] = useState(true)
  const collapseFolder = () => {
    setFolderCollased(!folderCollapsed)
  }
  return (
    <Fragment>
      <li class='pointer'>
        <span onClick={collapseFolder}>
          {folderCollapsed 
          ? 
          <svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619l4.357-4.357z"/></g></svg>
          :
          <svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 10.072l4.357-4.357l.62.618L8.284 11h-.618L3 6.333l.619-.618l4.357 4.357z"/></g></svg>
          }
          {tree.path}
        </span>
      </li>
      
      {folderCollapsed 
      ?
      null
      :
      <FetchFolder url={tree.url} parentFolder={parentFolder + tree.path}/>
      }
    </Fragment>
  )
}

interface Props {
  tree: TreeAPI
  parentFolder: string
}
