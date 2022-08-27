import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className=" place-items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-[#303F50]' : 'bg-[#303F50]'}
          relative inline-flex h-[28px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-[#6A8099] shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}