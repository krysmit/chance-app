import React from 'react';

export function Modal({ open, children, }) {
    if (!open) return null
  return (
  <div>
  {children}
  </div>
  )
}
export default {Modal}