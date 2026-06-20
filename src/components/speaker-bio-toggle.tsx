"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { speakerImageUrl } from "@/lib/speaker-images"

type SpeakerBioToggleProps = {
  name: string
  tagline?: string
  bio?: string
  imageSlug?: string
  showLabel: string
  hideLabel: string
  roleLabel?: string
  className?: string
}

function SpeakerAvatar({
  name,
  imageUrl,
  expanded,
}: {
  name: string
  imageUrl?: string
  expanded?: boolean
}) {
  if (!imageUrl) return null

  return (
    <img
      src={imageUrl}
      alt={name}
      loading="lazy"
      decoding="async"
      className={cn(
        "shrink-0 border border-border object-cover transition-all duration-300 ease-out",
        expanded ? "size-24 rounded-xl shadow-md" : "size-14 rounded-lg",
      )}
    />
  )
}

export function SpeakerBioToggle({
  name,
  tagline,
  bio,
  imageSlug,
  showLabel,
  hideLabel,
  roleLabel,
  className,
}: SpeakerBioToggleProps) {
  const [open, setOpen] = useState(false)
  const imageUrl = imageSlug ? speakerImageUrl(imageSlug) : undefined
  const toggleLabel = open ? hideLabel : showLabel

  return (
    <div className={className}>
      {roleLabel && <p className="mb-1.5 text-xs text-muted-foreground">{roleLabel}</p>}
      {bio ? (
        <>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={cn(
              "flex w-full items-start gap-3 rounded-xl border border-transparent p-2 text-start transition-colors duration-300",
              open && "border-border/40 bg-secondary/20",
              "hover:border-border/60 hover:bg-secondary/30",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
            )}
          >
            <SpeakerAvatar name={name} imageUrl={imageUrl} expanded={open} />
            <div className="min-w-0 flex-1 self-center">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-foreground">{name}</p>
                  {tagline && (
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{tagline}</p>
                  )}
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 pt-0.5 text-xs font-medium text-primary sm:text-sm">
                  {toggleLabel}
                  <ChevronDown
                    className={cn("size-4 transition-transform duration-300 ease-out", open && "rotate-180")}
                    aria-hidden
                  />
                </span>
              </div>
            </div>
          </button>
          <div
            className={cn(
              "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out",
              open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <p className="px-2 text-sm leading-relaxed text-muted-foreground">{bio}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-start gap-3 p-2">
          <SpeakerAvatar name={name} imageUrl={imageUrl} />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-snug text-foreground">{name}</p>
            {tagline && (
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{tagline}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
