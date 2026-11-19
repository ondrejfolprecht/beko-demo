"use client"

import * as React from "react"
import { cn } from "cn"
import { Switch as SwitchPrimitive } from "radix-ui"

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "group/switch relative inline-flex h-6 w-11 shrink-0 items-center border border-ink bg-background transition-colors outline-none data-checked:border-blue data-checked:bg-blue data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-4 translate-x-[3px] bg-ink transition-transform duration-200 ease-brand data-checked:translate-x-[23px] data-checked:bg-white"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
