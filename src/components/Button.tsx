import React from "react"

interface Props {
  title: string
  onClick(): void
  disabled: boolean
}

export function Button(props: Props) {
  const { title, onClick, disabled } = props

  return (
    <button onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}
