import { RegisterOptions } from 'react-hook-form'
import styles from './textInput.module.scss'

interface IProps {
  type: string
  name: string
  label: string
  formRef: any
  textarea?: boolean
}

const TextInput: React.FC<IProps> = ({
  type,
  name,
  label,
  formRef,
  textarea,
}) => {
  return (
    <div className={styles.field}>
      {textarea ? (
        <textarea
          cols={1}
          rows={7}
          name={name}
          className={styles.input}
          placeholder=" "
          ref={formRef}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={styles.input}
          placeholder=" "
          ref={formRef}
        />
      )}

      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  )
}

export default TextInput
