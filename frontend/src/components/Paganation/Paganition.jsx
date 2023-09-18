import React from 'react'
import { Link } from 'react-router-dom'

export default function Paganition() {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link">Previous</Link>
        </li>
        <li className="page-item "><Link className="page-link" href="#">1</Link></li>
        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
        <li className="page-item">
          <Link className="page-link" href="#">Next</Link>
        </li>
      </ul>
    </nav> 
    )
}
