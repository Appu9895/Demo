import React from 'react'
import { Table } from 'react-bootstrap'
export const TicketTable = ({Tickets}) => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            {Tickets.length ? Tickets.map(row=>(
                <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject} </td>
                <td>{row.addedAt}</td>
                <td>{row.addedAt}</td>
            </tr>
            )):
            <tr >
                <td colSpan="4" className='text-center' >No tickets to show</td>
            </tr>
            
            }

             
            
           
        </tbody>
    </Table>
  )
}
