import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { backgroundImages } from '@/public/images'

const SignUp = () => {
    const style = {
        background: `url(${backgroundImages.bg1.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    }

    function validate(values) {
        const errors = {}
        if (!values.email) {
            errors.email = 'Email is required'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address'
        }

        if (!values.password) {
            errors.password = 'Password is required'
        } else if (values.password.length < 6) {
            errors.password = 'Password length must be longer than 5 characters'
        }

        if (!values.passwordConfirm) {
            errors.passwordConfirm = 'Password confirm is required'
        } else if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = 'Passwords do not match'
        }

        return errors
    }

    async function handleSubmit(values, { setSubmitting }) {
        try {
            const res = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
            const data = await res.json()
            console.log(data)
        } catch (err) {
            console.error(err.message)
        }

        setSubmitting(false)
    }

    return (
        <div
            style={style}
            className="flex h-screen w-screen justify-center items-center flex-col bg-no-repeat"
        >
            <h1 className="text-gray-900 font-semibold text-2xl tracking-wide">
                Create Account
            </h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirm: '',
                }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mt-7 space-y-7 w-4/5 md:w-2/3 lg:w-1/3 bg-white/70 px-7 py-5 rounded-xl">
                        <div className="form-group">
                            <label htmlFor="name" className="form-title">
                                Name
                            </label>
                            <Field
                                type="text"
                                name="name"
                                className="form-input"
                            />
                            <ErrorMessage
                                className="form-error"
                                name="name"
                                component="div"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-title">
                                Email
                            </label>
                            <Field
                                type="email"
                                name="email"
                                className="form-input"
                            />
                            <ErrorMessage
                                className="form-error"
                                name="email"
                                component="div"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-title">
                                Password
                            </label>
                            <Field
                                type="password"
                                name="password"
                                className="form-input"
                            />
                            <ErrorMessage
                                className="form-error"
                                name="password"
                                component="div"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="passwordConfirm"
                                className="form-title"
                            >
                                Confirm Password
                            </label>
                            <Field
                                type="password"
                                name="passwordConfirm"
                                className="form-input"
                            />
                            <ErrorMessage
                                className="form-error"
                                name="passwordConfirm"
                                component="div"
                            />
                        </div>
                        <button
                            className="form-submit-button"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Create
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp
