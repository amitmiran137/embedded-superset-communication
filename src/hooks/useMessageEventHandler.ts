import { useEffect } from 'react'

export const useMessageEventHandler = (onMessageHandler: (event: MessageEvent) => void) => {
  useEffect(() => {
    window.addEventListener('message', onMessageHandler, false)
    return () => window.removeEventListener('message', onMessageHandler)
  }, [onMessageHandler])
}
