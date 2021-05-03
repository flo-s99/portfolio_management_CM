import React from "react";
import {Form, Formik} from "formik";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from "urql";

interface registerProps{
}

const REGISTER_MUTATION = `
mutation Register($username: String!, $password: String! ) {
    register(options: { username: $username, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
`

export const Register: React.FC<registerProps> = ({}) => {
    const [{}, register] = useMutation(REGISTER_MUTATION)
    return(
        <Wrapper variant="small">
        <Formik 
            initialValues={{username: "", password: "" }}
            onSubmit={(values) => {
                return register(values);
            }}
        >

        {({ isSubmitting }) => (
            <Form>

                <InputField name="username" placeholder="username" label="Username"/>

                <Box mt={5}>

                <InputField 
                name="password" 
                placeholder="password" 
                label="Password"
                type="password" 
                />
                </Box>

                <Button 
                type="submit"
                mt={3}
                isLoading = { isSubmitting }
                colorScheme="teal"
                >
                Register
                    </Button>
            </Form>
            )}
        </Formik>
        </Wrapper>
    );
};

export default Register