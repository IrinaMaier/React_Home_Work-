import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../components/DynamicForm.module.css'

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const firstInputValue = watch('firstField')
  const showSecondField = firstInputValue && firstInputValue.length >= 3

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.fieldGroup}>
        <label htmlFor="firstField" className={styles.label}>
          First Field:
        </label>
        <input
          type="text"
          id="firstField"
          {...register('firstField', {
            required: 'This field is required',
            minLength: {
              value: 3,
              message: 'Minimum length is 3 characters',
            },
          })}
          className={styles.input}
        />
        {errors.firstField && (
          <span className={styles.error}>{errors.firstField.message}</span>
        )}
      </div>

      {showSecondField && (
        <div className={styles.fieldGroup}>
          <label htmlFor="secondField" className={styles.label}>
            Second Field:{' '}
          </label>

          <input
            type="text"
            id="secondField"
            {...register('secondField', {
              required: 'Second Field is required',
            })}
            className={styles.input}
          />
          {errors.secondField && (
            <span className={styles.error}>{errors.secondField.message}</span>
          )}
        </div>
      )}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  )
}

export default DynamicForm
