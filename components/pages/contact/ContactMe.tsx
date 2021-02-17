import styles from './contactMe.module.scss'
import Map from './Map/Map'
import { useForm } from 'react-hook-form'
import TextInput from '../../common/TextInput/TextInput'

const ContactMe: React.FC = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className={styles.container}>
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

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <span className={styles.tagOpen}>{'<form>'}</span>
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
