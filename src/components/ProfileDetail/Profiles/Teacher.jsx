import React, { useEffect, useState } from 'react';
import {

  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Container,
  makeStyles,
  Button
} from '@material-ui/core';
import { Formik, Form, Field } from "formik";
import { useAuth } from 'components/Auth/AuthContext';
import { authStatusSelector } from 'utils/selectors';
import { useSelector } from 'react-redux';
const useStyles = makeStyles(() => ({
  root: {}
}));
let initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  cellphone: '',
  photo:'',
}

function Teacher() {
  const user = useAuth()
  const authStatus = useSelector(authStatusSelector)
  
  const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        cellphone: '',
        photo:'',
        });
  useEffect(()=>{
    
    if(authStatus === 'success'){
      console.log('entre')
    
      setValues({    
          firstName: user.firstName,
         lastName: user.lastName,
         email: user.email,
         cellphone: user.cellphone,
         photo:user.photo,})
    }
  },[authStatus])
  
  const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };

const handleSubmit = ()=>{
console.log(values)
}

    return (
        <Container>
       
        <Formik onSubmit={handleSubmit} initialValues={ initialValues }>
          {(formik) => (
            <Form>

        <CardHeader
          subheader="Puedes editar la tu informacion personal aqui"
          title="Editar Perfil"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="cellphone"
                onChange={handleChange}
                type="number"
                value={values.cellphone}
                variant="outlined"
              /> 
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
          <Field component={TextField}                
             label="URl"
             name="photo" 
             value={values.photo}
              />

            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                name="Date"
                onChange={handleChange}
                type="date"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              {/* <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                required
                DefaultValue={formik.values.address}
                variant="outlined"
              /> */}
            </Grid>
          </Grid>
          <Button type='submit'> enviar</Button>
        </CardContent> 
        </Form>
        )}
      </Formik>
    </Container>
  );
    
}

export default Teacher
