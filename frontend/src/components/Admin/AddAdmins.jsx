import { useDispatch } from "react-redux";
import { useToast,Select,FormControl,Input,Heading,FormLabel,Button} from "@chakra-ui/react";
import { useState } from "react";
import { addAdmin } from "../../redux/Admin/action";

const AddAdmins = () => {
  const dispatch = useDispatch();
  const initForm = { name: '', email: '', password: '', position: '',img: '',gender:''}
  const toast = useToast();
  const [form, setForm] = useState(initForm);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    try {
      console.log(form);
      dispatch(addAdmin(form))
      toast({
        title: 'Admin Added',
        description: `${form.name} has been added successfully`,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while adding',
        description: `${form.name} has not added`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    setForm(initForm)
  }
  return (
    <div>
      <Heading size='md'>Add Admin</Heading>
      <form onSubmit={formSubmitHandler}>
        <FormControl isRequired>
          {/* If I am not giving unique id than it's showing error but it's not showing the same in AddProducts form */}
          <FormLabel>Admin Name</FormLabel>
          <Input type='text' name='name' id='name' background='#fff' htmlSize={45} width='auto' onChange={formChangeHandler} value={form.name} />
          <FormLabel>Admin Image Link</FormLabel>
          <Input type='url' name='img' id='image' background='#fff' onChange={formChangeHandler} value={form.img} />
          <FormLabel>Admin Email</FormLabel>
          <Input type='email' name='email' id='email' background='#fff' onChange={formChangeHandler} value={form.email} />
          <FormLabel>Admin Gender</FormLabel>
          <Input type='text' name='gender' id='contact' background='#fff' onChange={formChangeHandler} value={form.gender} />
          <FormLabel>Admin Password</FormLabel>         
          <Input type='password' name='password' id='passoword' background='#fff' onChange={formChangeHandler} value={form.password} />
          <FormLabel>Admin Category</FormLabel>
          {/* I can also pass defaultValue to Select */}
          <Select placeholder="Select Role" name="position" id='role' background="cornflowerblue" onChange={formChangeHandler}>
            <option value='Admin'>Admin</option>
            <option value='Developer'>Developer</option>
          </Select>
          <Button type='submit' colorScheme='teal' marginTop='2'>Add</Button>
        </FormControl>
      </form>
    </div>)
}

export default AddAdmins;