import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

export const CompBreadcrumb = ({page}) => {
  return (
    <div >
        <Breadcrumb className='bg-transparent'>
        <Breadcrumb.Item href="/">
        Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
        {page}</Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}
