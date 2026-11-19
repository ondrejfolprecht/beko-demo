import * as React from "react"
import { cn } from "cn"

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex h-7 w-fit shrink-0 items-center gap-2 border border-line bg-background/70 px-2.5 text-[13px] font-medium whitespace-nowrap text-ink",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
