'use client'

import { useEffect, useState, useRef } from 'react'

export default function EasterEggs() {
  const [showBugToast, setShowBugToast] = useState(false)
  const keySequenceRef = useRef<string[]>([])

  // Konami code: ⬆⬆⬇⬇⬅➡⬅➡ B A
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

  // Handle key presses for Konami code
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase() === 'arrowup' || e.key.toLowerCase() === 'arrowdown' || e.key.toLowerCase() === 'arrowleft' || e.key.toLowerCase() === 'arrowright' ? e.key : e.key.toLowerCase()

      const prevSequence = keySequenceRef.current
      const newSequence = [...prevSequence, key]
      // Keep only the last 10 keys (length of Konami code)
      const trimmedSequence = newSequence.slice(-10)

      // Check if the sequence matches the Konami code
      if (trimmedSequence.length === 10 && trimmedSequence.every((k, i) => k === konamiCode[i])) {
        activateQaMode()
        keySequenceRef.current = []
        return
      }

      keySequenceRef.current = trimmedSequence
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Activate QA Mode
  const activateQaMode = () => {
    document.documentElement.style.setProperty('--qa-mode-active', '1')
    document.body.classList.add('qa-mode-enabled')

    // Show toast notification
    showQaModeToast()
  }

  // Show QA Mode toast
  const showQaModeToast = () => {
    const toast = document.createElement('div')
    toast.className = 'qa-mode-toast'
    toast.textContent = '🐞 QA MODE ENABLED - Testing Debug Overlay Active'
    document.body.appendChild(toast)

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10)

    // Remove after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show')
      setTimeout(() => toast.remove(), 300)
    }, 4000)
  }

  // Handle bug click
  const handleBugClick = () => {
    setShowBugToast(true)

    // Auto-hide after 2.5 seconds
    setTimeout(() => {
      setShowBugToast(false)
    }, 2500)
  }

  return (
    <>
      {/* Bug Click Easter Egg */}
      <div
        onClick={handleBugClick}
        className="fixed bottom-8 right-8 z-50 cursor-pointer select-none"
        title="Click the bug!"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleBugClick()
          }
        }}
      >
        {/* Animated Bug Icon */}
        <div className="bug-icon">
          🐞
          <div className="bug-wiggle"></div>
        </div>
      </div>

      {/* Bug Toast Notification */}
      {showBugToast && (
        <div className="fixed bottom-24 right-8 z-50 animate-toast">
          <div className="bug-toast">🐞 You caught a bug! REPORT IT.</div>
        </div>
      )}

      {/* QA Mode Styles - Applied dynamically */}
      <style jsx global>{`
        :root {
          --qa-mode-active: 0;
        }

        /* Bug Icon Styles */
        .bug-icon {
          position: relative;
          font-size: 3rem;
          animation: bugBounce 3s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(244, 63, 94, 0.4));
          transition: all 0.3s ease;
        }

        .bug-icon:hover {
          font-size: 3.3rem;
          filter: drop-shadow(0 0 12px rgba(244, 63, 94, 0.6));
        }

        /* Bug Wiggle Animation */
        @keyframes bugBounce {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(-2deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(-8px) rotate(2deg);
          }
        }

        /* Bug Toast Notification */
        .bug-toast {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(20, 20, 40, 0.95) 100%);
          border: 2px solid rgba(244, 63, 94, 0.6);
          color: #fecaca;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.95rem;
          box-shadow: 0 0 20px rgba(244, 63, 94, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          animation: toastSlideIn 0.3s ease-out;
        }

        /* Toast Animation */
        @keyframes toastSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) translateX(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(0) scale(1);
          }
        }

        .animate-toast {
          animation: toastSlideIn 0.3s ease-out;
        }

        /* QA Mode Debug Overlay */
        body.qa-mode-enabled * {
          border: 2px solid rgba(239, 68, 68, 0.4) !important;
        }

        /* QA Mode Toast */
        .qa-mode-toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%) translateY(-100px);
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 20, 20, 0.98) 100%);
          border: 2px solid rgba(239, 68, 68, 0.8);
          color: #fca5a5;
          padding: 16px 28px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.4), 0 12px 24px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          z-index: 9999;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .qa-mode-toast.show {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .bug-icon {
            font-size: 2.5rem;
          }

          .bug-icon:hover {
            font-size: 2.8rem;
          }

          .bug-toast {
            font-size: 0.85rem;
            padding: 10px 16px;
            bottom: 5rem;
            right: 1rem;
          }

          .qa-mode-toast {
            font-size: 0.9rem;
            padding: 12px 20px;
          }
        }

        /* Accessibility - remove on reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .bug-icon {
            animation: none;
          }

          .bug-toast,
          .animate-toast {
            animation: none;
          }

          .qa-mode-toast {
            transition: none;
          }
        }
      `}</style>
    </>
  )
}
