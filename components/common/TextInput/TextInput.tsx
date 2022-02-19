import React from 'react'
import { RefCallBack, UseFormRegisterReturn } from 'react-hook-form'
import styles from './textInput.module.scss'

interface IProps extends Omit<UseFormRegisterReturn, 'ref'> {
  type: string
  label: string
  textarea?: boolean
  inputRef: RefCallBack
}

const TextInput: React.FC<IProps> = (props) => {
  const { type, label, textarea, inputRef, ...rest } = props

  return (
    <div className={styles.field}>
      {textarea ? (
        <textarea
          {...rest}
          ref={inputRef}
          cols={1}
          rows={7}
          className={styles.input}
          placeholder=" "
        />
      ) : (
        <input
          {...rest}
          ref={inputRef}
          type={type}
          className={styles.input}
          placeholder=" "
        />
      )}

      <label htmlFor={props.name} className={styles.label}>
        {label}
      </label>
    </div>
  )
}

export default TextInput
