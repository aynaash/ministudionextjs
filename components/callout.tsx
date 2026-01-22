import React from "react"
import { AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react"

type CalloutType = "info" | "warning" | "success" | "error"

interface CalloutProps {
  type?: CalloutType
  children: React.ReactNode
}

export function Callout({ type = "info", children }: CalloutProps) {
  const config = {
    info: {
      icon: Info,
      bg: "bg-blue-500/10",
      border: "border-l-blue-500",
      text: "text-blue-200",
    },
    warning: {
      icon: AlertTriangle,
      bg: "bg-yellow-500/10",
      border: "border-l-yellow-500",
      text: "text-yellow-200",
    },
    success: {
      icon: CheckCircle,
      bg: "bg-green-500/10",
      border: "border-l-green-500",
      text: "text-green-200",
    },
    error: {
      icon: AlertCircle,
      bg: "bg-red-500/10",
      border: "border-l-red-500",
      text: "text-red-200",
    },
  }

  const { icon: Icon, bg, border, text } = config[type]

  return (
    <div className={`flex gap-3 p-4 rounded-lg border-l-4 ${bg} ${border} ${text} my-6`}>
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <div>{children}</div>
    </div>
  )
}
