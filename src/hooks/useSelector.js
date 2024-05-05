const userSelector = (data, id) => {
  const updatedData = data.map((item) =>
    item.id === id
      ? { ...item, isSelected: true }
      : { ...item, isSelected: false }
  )
  return updatedData
}

export default userSelector
