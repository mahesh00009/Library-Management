
import {string, object} from "yup"


export const SignupValidationSchema = object({
    name : string().required("required field").matches(/^[A-Z]/,"Starts with caps"),
	 email: string().required("required field"),
     phone : string().required("required field").matches(/^[1-9][0-9]/,"invalid input"),
	address : string().required("required field"),
	college : string().required("required field"),
    password: string().required("required field").min(6,"enter at least 6 chars")
})

export const LoginValidationSchema = object({
    email: string().required("required field"),
    password: string().required("required field").min(6,"enter at least 6 chars")
})


