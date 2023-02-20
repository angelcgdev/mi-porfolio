import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react"

interface Props {
  label: string;
  error: string;
  id: string;
  type?: HTMLInputTypeAttribute | undefined;
  isTextArea?: boolean;
  imputClass?: string;
  autoComplete?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  onChange?: (e: ChangeEvent)=> void;
}
export const InputGroup = ({label, error, id, type, isTextArea = false, imputClass, autoComplete, value, onChange }: Props) => {



  return (
      <label className="flex flex-col text-lg gap-1">
        {label}
        {
          (!isTextArea)
          ?<input
            id={id}
            name={id}
            type={type}
            onChange={onChange}
            value={value}
            aria-describedby={`${id}-error`}
            autoComplete={autoComplete}/>
          :
          <textarea
            id={id}
            name={id}
            className={imputClass}
            rows={3}
            onChange={onChange}
            value={value}
            autoComplete={autoComplete}
          />
        }
        <p id={`${id}-error`} role="alert" className={`text-lg text-red-500 ${!!error?'h-6':'h-0'} duration-300`}>{error}</p>
      </label>
  )
}
