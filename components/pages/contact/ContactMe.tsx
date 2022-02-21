import React from 'react'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'
import TextInput from '../../common/TextInput/TextInput'
import PacmanLoader from 'react-spinners/PacmanLoader'
import styles from './contactMe.module.scss'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactMe: React.FC = () => {
  const Map = dynamic(() => import('./Map/Map'), {
    ssr: false,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [submitStatus, setSubmitState] = React.useState<
    'none' | 'error' | 'success'
  >('none')
  const [loading, setLoading] = React.useState<boolean>(false)

  const onSubmit = (data, event) => {
    event.preventDefault()
    setLoading(true)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...data,
      }),
    })
      .then(() => {
        setLoading(false)
        setSubmitState('success')
        reset()
      })
      .catch(() => {
        setLoading(false)
        setSubmitState('error')
      })
  }

  const { ref: nameRef, ...nameProps } = register('name', { required: true })
  const { ref: emailRef, ...emailProps } = register('email', { required: true })
  const { ref: subjectRef, ...subjectProps } = register('subject', {
    required: true,
  })
  const { ref: messageRef, ...messageProps } = register('message', {
    required: true,
  })

  return (
    <div className={styles.container}>
      {loading ? <div className={styles.overlay}></div> : null}
      {loading ? (
        <div className={styles.loader}>
          <PacmanLoader size={100} color="#00fff5" />
        </div>
      ) : null}
      <div className={styles.formContainer}>
        <div className={styles.headingTagContainer}>
          <span className={styles.tagOpen}>{'<h1>'}</span>
          <div className={styles.headingCloseContainer}>
            <h1 className={styles.heading}>Get in Touch</h1>
            <span className={styles.tagClose}>{'</h1>'}</span>
          </div>
        </div>

        <p className={styles.contactMe}>
          I'm always open to new opportunities. Whether you have a question or
          just want to talk, feel free to hit me up.
        </p>

        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          name="contact"
          netlify-honeypot="bot-field"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" {...register('form-name')} value="contact" />

          <div className={styles.fax}>
            <label>
              If you're a robot, please contact me by fax only:
              <input
                {...register('bot-field')}
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          <span className={styles.tagOpen}>{'<form>'}</span>
          <span
            className={
              submitStatus === 'success'
                ? styles.submitSuccess
                : styles.submitError
            }
          >
            {submitStatus === 'none'
              ? ''
              : submitStatus === 'success'
              ? "You're response has been submitted. Thanks for reaching out!"
              : 'Something went wrong while submitting your form'}
          </span>

          <div className={styles.nameEmail}>
            <TextInput
              {...nameProps}
              inputRef={nameRef}
              type="text"
              label="Name"
            />

            <TextInput
              {...emailProps}
              inputRef={emailRef}
              type="email"
              label="Email"
            />
          </div>

          <div className={styles.nameEmailInvalid}>
            {errors.name && (
              <span className={styles.invalidFieldName}>
                This field is required
              </span>
            )}
            {errors.email && (
              <span className={styles.invalidFieldEmail}>
                This field is required
              </span>
            )}
          </div>

          <TextInput
            {...subjectProps}
            inputRef={subjectRef}
            type="text"
            label="Subject"
          />
          {errors.name && (
            <span className={styles.invalidField}>This field is required</span>
          )}

          <TextInput
            {...messageProps}
            inputRef={messageRef}
            type="textarea"
            textarea={true}
            label="Message"
          />
          {errors.name && (
            <span className={styles.invalidField}>This field is required</span>
          )}

          <button className={styles.submit} type="submit">
            Submit
          </button>
          <span className={styles.tagClose}>{'</form>'}</span>
        </form>
      </div>

      <div className={styles.map}>
        <Map />
      </div>
    </div>
  )
}

export default ContactMe
