import { useEffect, useRef } from "react"
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap"

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"

const FADE_DURATION = 0.5
const LOOP_DELAY_MS = 100

function setVideoOpacity(video: HTMLVideoElement, opacity: number) {
  video.style.opacity = String(opacity)
}

export function HeroBackground() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)
  const loopTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.fromTo(
        ".hero-blur-orb",
        { scale: 0.92, opacity: 0.75 },
        {
          scale: 1.06,
          opacity: 0.92,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      )
    },
    { scope: wrapRef },
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    setVideoOpacity(video, 0)

    const updateOpacity = () => {
      const duration = video.duration
      if (!duration || Number.isNaN(duration)) {
        rafRef.current = requestAnimationFrame(updateOpacity)
        return
      }

      const t = video.currentTime

      if (t < FADE_DURATION) {
        setVideoOpacity(video, t / FADE_DURATION)
      } else if (t > duration - FADE_DURATION) {
        setVideoOpacity(video, Math.max(0, (duration - t) / FADE_DURATION))
      } else {
        setVideoOpacity(video, 1)
      }

      if (!video.paused && !video.ended) {
        rafRef.current = requestAnimationFrame(updateOpacity)
      }
    }

    const startFadeLoop = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateOpacity)
    }

    const replay = () => {
      setVideoOpacity(video, 0)
      loopTimeoutRef.current = setTimeout(() => {
        video.currentTime = 0
        void video.play()
        startFadeLoop()
      }, LOOP_DELAY_MS)
    }

    const onEnded = () => {
      cancelAnimationFrame(rafRef.current)
      replay()
    }

    const onPlay = () => startFadeLoop()

    video.addEventListener("ended", onEnded)
    video.addEventListener("play", onPlay)

    if (video.readyState >= 1) {
      void video.play()
    } else {
      video.addEventListener(
        "loadeddata",
        () => {
          void video.play()
        },
        { once: true },
      )
    }

    return () => {
      cancelAnimationFrame(rafRef.current)
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current)
      video.removeEventListener("ended", onEnded)
      video.removeEventListener("play", onPlay)
    }
  }, [])

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="hero-video-wrap absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ opacity: 0 }}
          src={VIDEO_URL}
          muted
          playsInline
          preload="auto"
        />
      </div>

      <div className="hero-blur-orb absolute top-1/2 left-1/2 h-[527px] w-[984px] -translate-x-1/2 -translate-y-1/2 bg-gray-950 opacity-90 blur-[82px]" />
    </div>
  )
}
