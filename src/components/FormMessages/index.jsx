import { useFormik } from "formik"
import Button from "../Button"
import { FormStyled, InfoText, TextareaStyled } from "./styles"
import messageValidation from "../../common/validations/messsagesValidation"
import { useContext, useState } from "react"
import { MessagesContext } from "../../contexts/MessagesContext"
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../../contexts/AuthContext"
import newDate from '../../common/functions/editDate'

const FormMessages = () => {

    const [ textLength , setTextLength ] = useState(0)

    const { messages , setMessages } = useContext(MessagesContext)
    const { auth } = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: messageValidation(),
        onSubmit: (values , { resetForm }) => {
            setMessages([
                {
                    id: uuidv4(),
                    ...values,
                    user: auth,
                    date: newDate()
                },
                ...messages
            ])

            setTextLength(0)
            resetForm()
        }
    })

    const handleTextareaChange = (event) => {
        formik.handleChange(event)
        setTextLength(event.target.value.length)
    }

    return (
        <FormStyled onSubmit={formik.handleSubmit}>
            <InfoText>Characters remaining: {1000 - textLength}</InfoText>
            <TextareaStyled 
                name="message" 
                id="message" 
                cols="30" rows="10" 
                placeholder="Type here ..."
                onChange={handleTextareaChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                maxLength={1000}
            ></TextareaStyled>

            {formik.touched.message && formik.errors.message ? (
                <div>{formik.errors.message}</div>
            ) : null}

            <Button type="submmit">Send</Button>
        </FormStyled>
    )
}

export default FormMessages