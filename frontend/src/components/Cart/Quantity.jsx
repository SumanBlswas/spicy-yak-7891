import { Select } from '@chakra-ui/react'

const Quantity = ({qty,setQty}) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
    //   focusBorderColor={useColorModeValue("blue.500", "blue.200")}     
      onChange={(e) =>setQty(e.target.value)}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export default Quantity