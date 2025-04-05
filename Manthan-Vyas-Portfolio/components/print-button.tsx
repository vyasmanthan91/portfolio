"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export function PrintButton() {
  return (
    <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>
      <Printer className="h-4 w-4" />
      Print Resume
    </Button>
  )
}

