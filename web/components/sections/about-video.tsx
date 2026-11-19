"use client";

import { Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Dialog as DialogPrimitive } from "radix-ui";
import { useCallback, useState } from "react";
import { about } from "@/content/site";

const { video } = about;
const zoom = { type: "spring", duration: 0.55, bounce: 0.12 } as const;

/** The poster keeps the same picture while it moves, so the zoom reads as one object growing into the player. */
function Poster({ sizes }: { sizes: string }) {
  return (
    <motion.div layout="position" className="absolute inset-0">
      <Image src={video.poster} alt="" fill sizes={sizes} className="object-cover" />
    </motion.div>
  );
}

/** Company film from our own file. Nothing plays on its own: the poster zooms into a centred player after a click. */
export function AboutVideo() {
  const [open, setOpen] = useState(false);

  // Playback starts right away and the film grows together with the poster. If the browser still blocks
  // sound, the native controls stay visible and one press starts it.
  const play = useCallback((node: HTMLVideoElement | null) => {
    node?.play().catch(() => undefined);
  }, []);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger className="group relative block aspect-video w-full overflow-clip bg-mist text-left lg:aspect-[21/9]">
        {!open && (
          <motion.div layoutId="about-video" transition={zoom} className="absolute inset-0 overflow-clip">
            <Poster sizes="(min-width: 1500px) 1344px, 100vw" />
            <span aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-scrim/60 via-scrim/0 to-scrim/0 transition-opacity duration-300 group-hover:opacity-80" />
          </motion.div>
        )}
        <span className="absolute bottom-4 left-4 flex items-center gap-4 text-[15px] font-medium text-white lg:bottom-6 lg:left-6">
          <span className="grid size-14 place-items-center bg-blue transition-colors duration-200 group-hover:bg-blue-deep lg:size-16">
            <Play aria-hidden="true" className="size-5 translate-x-px fill-current" />
          </span>
          <span className="flex items-baseline gap-3">
            {video.action}
            <span className="text-white/75 tabular-nums">{video.duration}</span>
          </span>
        </span>
        <span className="sr-only">, {video.posterAlt}</span>
      </DialogPrimitive.Trigger>

      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-scrim/90 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content
              forceMount
              aria-describedby={undefined}
              onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
              className="fixed inset-0 z-50 grid place-items-center p-4 outline-none sm:p-8 lg:p-16"
            >
              <DialogPrimitive.Title className="sr-only">{video.title}</DialogPrimitive.Title>
              <motion.div
                layoutId="about-video"
                transition={zoom}
                className="relative aspect-video w-[min(100%,calc((100dvh-8rem)*16/9))] overflow-clip bg-black"
              >
                <Poster sizes="100vw" />
                <video
                  ref={play}
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  preload="auto"
                  aria-label={video.title}
                  className="absolute inset-0 size-full object-cover"
                />
              </motion.div>
              <DialogPrimitive.Close asChild>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-3 right-3 grid size-11 place-items-center text-white transition-colors hover:bg-white/10 focus-visible:outline-white sm:top-5 sm:right-5"
                >
                  <X aria-hidden="true" className="size-6" />
                  <span className="sr-only">Zavřít video</span>
                </motion.button>
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
