"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { speakerImageUrl, isSpeakerAvatar } from "@/lib/speaker-images"

const BIO_LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g

function BioText({ text }: { text: string }) {
  const parts: Array<{ type: "text"; value: string } | { type: "link"; label: string; href: string }> = []
  let lastIndex = 0

  for (const match of text.matchAll(BIO_LINK_RE)) {
    const index = match.index ?? 0
    if (index > lastIndex) {
      parts.push({ type: "text", value: text.slice(lastIndex, index) })
    }
    parts.push({ type: "link", label: match[1], href: match[2] })
    lastIndex = index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", value: text.slice(lastIndex) })
  }

  return (
    <p className="px-1 text-sm leading-relaxed text-muted-foreground">
      {parts.map((part, index) =>
        part.type === "link" ? (
          <a
            key={index}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {part.label}
          </a>
        ) : (
          <span key={index}>{part.value}</span>
        ),
      )}
    </p>
  )
}

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
  const avatar = imageSlug ? isSpeakerAvatar(imageSlug) : false

  const toggle = () => setOpen((v) => !v)

  return (
    <div className={className}>
      {roleLabel && <p className="mb-1.5 text-xs text-muted-foreground">{roleLabel}</p>}
      {bio ? (
        <>
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            className={cn(
              "group w-full overflow-hidden rounded-xl text-start transition-colors duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
              open
                ? "border border-border/60 bg-card"
                : "border border-transparent p-2 hover:border-border/60 hover:bg-secondary/30",
            )}
          >
            <div
              className={cn(
                "transition-all duration-500 ease-out",
                open ? "max-h-0 overflow-hidden opacity-0" : "max-h-40 opacity-100",
              )}
              aria-hidden={open}
            >
              <div className="flex items-start gap-3">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "size-14 shrink-0 rounded-lg border border-border",
                      avatar ? "bg-muted object-contain p-1.5" : "object-cover",
                    )}
                  />
                )}
                <div className="min-w-0 flex-1 self-center">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug text-foreground">{name}</p>
                      {tagline && (
                        <p className="mt-1 text-xs leading-snug text-muted-foreground">{tagline}</p>
                      )}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 pt-0.5 text-xs font-medium text-primary sm:text-sm">
                      {showLabel}
                      <ChevronDown className="size-4" aria-hidden />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
              aria-hidden={!open}
            >
              <div className="overflow-hidden">
                {imageUrl ? (
                  <div
                    className={cn(
                      "relative aspect-[4/3] w-full min-h-52 sm:min-h-60",
                      avatar && "bg-muted",
                    )}
                  >
                    <img
                      src={imageUrl}
                      alt={name}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "absolute inset-0 h-full w-full",
                        avatar ? "object-contain p-10 sm:p-14" : "object-cover object-[center_20%]",
                      )}
                    />
                    <div
                      className={cn(
                        "absolute inset-0",
                        avatar
                          ? "bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                          : "bg-gradient-to-t from-black/90 via-black/45 to-black/5",
                      )}
                      aria-hidden
                    />
                    <span className="absolute end-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm sm:text-sm">
                      {hideLabel}
                      <ChevronDown className="size-4 rotate-180" aria-hidden />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4 pt-10">
                      <p className="font-heading text-base font-bold leading-snug text-white sm:text-lg">{name}</p>
                      {tagline && (
                        <p className="mt-1 text-xs leading-snug text-white/85 sm:text-sm">{tagline}</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-3 p-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug text-foreground">{name}</p>
                      {tagline && (
                        <p className="mt-1 text-xs leading-snug text-muted-foreground">{tagline}</p>
                      )}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary sm:text-sm">
                      {hideLabel}
                      <ChevronDown className="size-4 rotate-180" aria-hidden />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </button>

          <div
            className={cn(
              "grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out",
              open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <BioText text={bio} />
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-start gap-3 p-2">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              loading="lazy"
              decoding="async"
              className={cn(
                "size-14 shrink-0 rounded-lg border border-border",
                avatar ? "bg-muted object-contain p-1.5" : "object-cover",
              )}
            />
          )}
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
