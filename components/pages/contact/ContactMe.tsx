import React from 'react'
import styles from './contactMe.module.scss'
import Map from './Map/Map'
import { useForm } from 'react-hook-form'
import TextInput from '../../common/TextInput/TextInput'
import PacmanLoader from 'react-spinners/PacmanLoader'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactMe: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm()
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
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="form-name"
            ref={register}
            value="contact"
          />
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
              type="text"
              name="name"
              label="Name"
              formRef={register({ required: true })}
            />

            <TextInput
              type="email"
              name="email"
              label="Email"
              formRef={register({ required: true })}
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
            type="text"
            name="subject"
            label="Subject"
            formRef={register({ required: true })}
          />
          {errors.name && (
            <span className={styles.invalidField}>This field is required</span>
          )}

          <TextInput
            type="textarea"
            textarea={true}
            name="message"
            label="Message"
            formRef={register({ required: true })}
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
