import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser,getUsersList } from '../../redux/Admin/action';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Heading, IconButton, useToast,CircularProgress } from '@chakra-ui/react'
import { FiUserX } from 'react-icons/fi';

const ManageUsers = () => {
  const { isLoadingUserList, isErrorUserList, users} = useSelector(store => store.adminReducer);
  
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (user) => {
    try {
      dispatch(deleteUser(user._id));
      toast({
        title: 'User Deleted',
        description: `${user.name} has been deleted successfully`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while deleting',
        description: `${user.name} has not deleted`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    dispatch(getUsersList)
    
  }, []);
  // why my this componet is rednering 2 extra times?
  // console.log('manage uses list page rendering')

  return (
    <div>
      <Heading size='md'>Manage Users</Heading>
      {isLoadingUserList && <CircularProgress isIndeterminate color='green.300' />}
      {isErrorUserList && <h2>Error Occured while getting User list</h2>}
      <div> {users.length > 0 &&
        <TableContainer>
          <Table variant='striped' colorScheme='teal' size={'lg'}>
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Order</Th>
                <Th>Cart</Th>
                <Th>Total</Th>
                <Th>Profit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => {
        
                return <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td >{0}</Td>
                  <Td>{0}</Td>
                  <Td >{'₹' + 0}</Td>
                  <Td >{'₹' + 100}</Td>
                  <Td><IconButton aria-label='Delete database' onClick={() => handleDelete(user)} icon={<FiUserX />} /></Td>
                </Tr>
              })}
            </Tbody>
            <Tfoot bg={'yellow.400'}>
              <Tr>
                <Th>Total : {users.length}</Th>
                <Th >Orders : {0}</Th>
                <Th>Cart : {0}</Th>
                <Th>Total : ₹{0}</Th>
                <Th>Profit : ₹{users.length*100}</Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      }
      </div>
    </div>
  )
}
export default ManageUsers;