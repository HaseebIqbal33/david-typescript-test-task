import { ChangeEvent } from "react"

interface Props {
  type: string
  name: string
  value: string
  onChange(e: ChangeEvent<HTMLInputElement>): void
}

export function Input(props: Props) {
  const { type, name, value, onChange } = props
  return (
    <input
      type={type || "text"}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}
