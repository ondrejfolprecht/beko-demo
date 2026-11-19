import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent text-[15px] font-medium whitespace-nowrap transition-colors duration-200 outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-blue text-white hover:bg-blue-deep",
        outline: "border-ink bg-background text-ink hover:bg-ink hover:text-background",
        quiet: "border-line bg-background text-ink hover:border-ink",
        ghost: "text-ink hover:bg-mist",
      },
      size: {
        default: "h-11 gap-3 px-5",
        split: "h-12 gap-5 pl-5",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

/** Separate arrow block for size="split". On hover and focus one arrow leaves in its direction and a second one follows it in. */
function ButtonArrow({ external = false, className }: { external?: boolean; className?: string }) {
  const Icon = external ? ArrowUpRight : ArrowRight

  return (
    <span aria-hidden="true" data-direction={external ? "diagonal" : "forward"} className={cn("button-arrow grid h-full w-12 place-items-center overflow-clip border-l border-current/25", className)}>
      <Icon />
      <Icon />
    </span>
  )
}

export { Button, ButtonArrow, buttonVariants }
