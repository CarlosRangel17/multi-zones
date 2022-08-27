import { waitFor, fireEvent, screen } from '@testing-library/react'

export const fireResize = async (width: number, height?: number) => {
  global.innerWidth = width
  global.innerHeight = height || width
  await waitFor(() => global.dispatchEvent(new Event('resize')))
}

// Finds the input by name and adds a value to the it
export const handleTestInputChange = (inputName: string | RegExp, value: string) => {
  const inputRole = screen.getByRole('textbox', { name: inputName })
  fireEvent.change(inputRole, { target: { value: value } })
}
