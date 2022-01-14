import './Modal.css'
import ReactDOM from 'react-dom'

export default function Modal({ children, closeModal, closeable }) {

  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-content">
          {closeable !== false ? (<button className='close-button' onClick={closeModal}>X</button>) : null}
          {children}
        </div>
      </div>
    </div>
  ), document.body)
}
