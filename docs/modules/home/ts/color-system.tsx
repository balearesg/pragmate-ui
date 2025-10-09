// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Badge } from "@/components/ui/badge"
// import { useToast } from "@/hooks/use-toast"
// import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
// import { Copy, Palette, Download, Code2, Check } from "lucide-react"

// interface ColorShade {
//   name: string
//   hex: string
//   rgb: string
//   hsl: string
// }

// interface ColorSystem {
//   primary: ColorShade[]
//   secondary: ColorShade[]
//   tertiary: ColorShade[]
//   neutral: ColorShade[]
//   success: ColorShade[]
//   warning: ColorShade[]
//   error: ColorShade[]
// }

// export default function Component() {
//   const [primaryColor, setPrimaryColor] = useState("#3b82f6")
//   const [secondaryColor, setSecondaryColor] = useState("#8b5cf6")
//   const [tertiaryColor, setTertiaryColor] = useState("#14b8a6")
//   const [neutralColor, setNeutralColor] = useState("#6b7280")
//   const [colorSystem, setColorSystem] = useState<ColorSystem | null>(null)
//   const { toast } = useToast()
//   const [drawerOpen, setDrawerOpen] = useState(false)
//   const [selectedColors, setSelectedColors] = useState<ColorShade[]>([])
//   const [selectedCategory, setSelectedCategory] = useState("")
//   const [copiedProperty, setCopiedProperty] = useState<string | null>(null)

//   // Convert hex to HSL
//   const hexToHsl = (hex: string): [number, number, number] => {
//     const r = Number.parseInt(hex.slice(1, 3), 16) / 255
//     const g = Number.parseInt(hex.slice(3, 5), 16) / 255
//     const b = Number.parseInt(hex.slice(5, 7), 16) / 255

//     const max = Math.max(r, g, b)
//     const min = Math.min(r, g, b)
//     let h = 0
//     let s = 0
//     const l = (max + min) / 2

//     if (max !== min) {
//       const d = max - min
//       s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
//       switch (max) {
//         case r:
//           h = (g - b) / d + (g < b ? 6 : 0)
//           break
//         case g:
//           h = (b - r) / d + 2
//           break
//         case b:
//           h = (r - g) / d + 4
//           break
//       }
//       h /= 6
//     }

//     return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
//   }

//   // Convert HSL to hex
//   const hslToHex = (h: number, s: number, l: number): string => {
//     h /= 360
//     s /= 100
//     l /= 100

//     const hue2rgb = (p: number, q: number, t: number) => {
//       if (t < 0) t += 1
//       if (t > 1) t -= 1
//       if (t < 1 / 6) return p + (q - p) * 6 * t
//       if (t < 1 / 2) return q
//       if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
//       return p
//     }

//     let r, g, b
//     if (s === 0) {
//       r = g = b = l
//     } else {
//       const q = l < 0.5 ? l * (1 + s) : l + s - l * s
//       const p = 2 * l - q
//       r = hue2rgb(p, q, h + 1 / 3)
//       g = hue2rgb(p, q, h)
//       b = hue2rgb(p, q, h - 1 / 3)
//     }

//     const toHex = (c: number) => {
//       const hex = Math.round(c * 255).toString(16)
//       return hex.length === 1 ? "0" + hex : hex
//     }

//     return `#${toHex(r)}${toHex(g)}${toHex(b)}`
//   }

//   // Convert hex to RGB
//   const hexToRgb = (hex: string): string => {
//     const r = Number.parseInt(hex.slice(1, 3), 16)
//     const g = Number.parseInt(hex.slice(3, 5), 16)
//     const b = Number.parseInt(hex.slice(5, 7), 16)
//     return `rgb(${r}, ${g}, ${b})`
//   }

//   // Helper: reduce saturation near extremes of lightness so los tonos muy claros/oscuros no se vean "sucios"
//   const adjustSaturationForLightness = (s: number, lTarget: number) => {
//     const distance = Math.abs(lTarget - 50) // 0..50
//     const factor = 1 - (distance / 50) * 0.5 // reduce hasta 50% en los extremos
//     const sAdj = Math.round(s * factor)
//     return Math.max(5, Math.min(100, sAdj))
//   }

//   // Mapa de stops estándar 25..950 con lightness objetivo
//   const lightnessScale: Record<string, number> = {
//     "25": 98,
//     "50": 96,
//     "100": 90,
//     "200": 80,
//     "300": 70,
//     "400": 60,
//     // "500" se llena con el L del color base dinámicamente
//     "600": 50,
//     "700": 40,
//     "800": 30,
//     "900": 20,
//     "950": 12,
//   }

//   const stops = ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const

//   // Generate color shades (25 muy claro -> 950 muy oscuro), 500 = base brand
//   const generateShades = (baseColor: string, name: string): ColorShade[] => {
//     const [h, s, l] = hexToHsl(baseColor)

//     // Escala fija con diferencias mínimas de contraste garantizadas
//     const lightnessValues: Record<string, number> = {
//       "25": 97,
//       "50": 94,
//       "100": 87,
//       "200": 76,
//       "300": 65,
//       "400": 55,
//       "500": 45, // Base estándar
//       "600": 35,
//       "700": 26,
//       "800": 18,
//       "900": 11,
//       "950": 6,
//     }

//     // Ajustar la escala basada en el lightness del color original
//     const baseLightness = l
//     let adjustedLightness: Record<string, number>

//     if (baseLightness > 70) {
//       // Color muy claro - comprimir hacia arriba manteniendo diferencias
//       adjustedLightness = {
//         "25": 98,
//         "50": 95,
//         "100": 90,
//         "200": 83,
//         "300": 75,
//         "400": Math.max(65, baseLightness + 3),
//         "500": baseLightness,
//         "600": Math.max(10, baseLightness - 12),
//         "700": Math.max(8, baseLightness - 22),
//         "800": Math.max(6, baseLightness - 32),
//         "900": Math.max(4, baseLightness - 42),
//         "950": Math.max(2, baseLightness - 52),
//       }
//     } else if (baseLightness < 25) {
//       // Color muy oscuro - comprimir hacia abajo manteniendo diferencias
//       adjustedLightness = {
//         "25": Math.min(96, baseLightness + 52),
//         "50": Math.min(92, baseLightness + 42),
//         "100": Math.min(85, baseLightness + 32),
//         "200": Math.min(75, baseLightness + 22),
//         "300": Math.min(65, baseLightness + 12),
//         "400": Math.min(55, baseLightness + 3),
//         "500": baseLightness,
//         "600": Math.max(8, baseLightness - 5),
//         "700": Math.max(6, baseLightness - 8),
//         "800": Math.max(4, baseLightness - 11),
//         "900": Math.max(2, baseLightness - 14),
//         "950": Math.max(1, baseLightness - 17),
//       }
//     } else {
//       // Color en rango normal - usar el color base como 500 y ajustar el resto
//       adjustedLightness = {
//         "25": 97,
//         "50": 94,
//         "100": 87,
//         "200": 76,
//         "300": Math.max(baseLightness + 10, 65),
//         "400": Math.max(baseLightness + 5, 55),
//         "500": baseLightness,
//         "600": Math.max(baseLightness - 10, 10),
//         "700": Math.max(baseLightness - 19, 8),
//         "800": Math.max(baseLightness - 27, 6),
//         "900": Math.max(baseLightness - 34, 4),
//         "950": Math.max(baseLightness - 41, 2),
//       }
//     }

//     // Validar y ajustar para asegurar diferencias mínimas
//     const validatedLightness: Record<string, number> = {}
//     const stopsArray = Object.keys(adjustedLightness).sort((a, b) => {
//       const order = ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]
//       return order.indexOf(a) - order.indexOf(b)
//     })

//     for (let i = 0; i < stopsArray.length; i++) {
//       const currentStop = stopsArray[i]
//       let currentValue = adjustedLightness[currentStop]

//       // Asegurar diferencia mínima con el stop anterior
//       if (i > 0) {
//         const prevStop = stopsArray[i - 1]
//         const prevValue = validatedLightness[prevStop]
//         const minDifference = 7 // Diferencia mínima para contraste visible

//         if (currentValue >= prevValue - minDifference) {
//           currentValue = Math.max(1, prevValue - minDifference)
//         }
//       }

//       validatedLightness[currentStop] = Math.round(currentValue)
//     }

//     return stops.map((suffix) => {
//       const lTarget = validatedLightness[suffix]
//       const sTarget = suffix === "500" ? s : adjustSaturationForLightness(s, lTarget)
//       const hex = hslToHex(h, sTarget, lTarget)
//       return {
//         name: `${name}-${suffix}`,
//         hex,
//         rgb: hexToRgb(hex),
//         hsl: `hsl(${h}, ${sTarget}%, ${lTarget}%)`,
//       }
//     })
//   }

//   // Neutrales 25..950 (negro a blanco con stops estándar)
//   const generateNeutrals = (): ColorShade[] => {
//     return generateShades(neutralColor, "neutral")
//   }

//   // Semánticos 25..950 con saturación adaptada por stop
//   const generateSemanticColors = (hue: number, name: string): ColorShade[] => {
//     // Escala fija y progresiva de lightness con mejor contraste
//     const lightnessValues: Record<string, number> = {
//       "25": 97,
//       "50": 94,
//       "100": 87,
//       "200": 76,
//       "300": 65,
//       "400": 54,
//       "500": 43,
//       "600": 33,
//       "700": 24,
//       "800": 16,
//       "900": 9,
//       "950": 4,
//     }

//     // Saturación progresiva optimizada
//     const saturationValues: Record<string, number> = {
//       "25": 25,
//       "50": 30,
//       "100": 40,
//       "200": 50,
//       "300": 60,
//       "400": 70,
//       "500": 75,
//       "600": 80,
//       "700": 85,
//       "800": 88,
//       "900": 92,
//       "950": 95,
//     }

//     return stops.map((suffix) => {
//       const l = lightnessValues[suffix]
//       const s = saturationValues[suffix]
//       const hex = hslToHex(hue, s, l)
//       return {
//         name: `${name}-${suffix}`,
//         hex,
//         rgb: hexToRgb(hex),
//         hsl: `hsl(${hue}, ${s}%, ${l}%)`,
//       }
//     })
//   }

//   const generateColorSystem = () => {
//     const system: ColorSystem = {
//       primary: generateShades(primaryColor, "primary"),
//       secondary: generateShades(secondaryColor, "secondary"),
//       tertiary: generateShades(tertiaryColor, "tertiary"),
//       neutral: generateNeutrals(),
//       success: generateSemanticColors(142, "success"), // Green
//       warning: generateSemanticColors(45, "warning"), // Yellow
//       error: generateSemanticColors(0, "error"), // Red
//     }
//     setColorSystem(system)
//   }

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text)
//     toast({
//       title: "Copied to clipboard",
//       description: "Color value has been copied to your clipboard.",
//     })
//   }

//   const copyCSSProperty = (property: string, value: string) => {
//     const cssProperty = `--${property}: ${value};`
//     navigator.clipboard.writeText(cssProperty)
//     setCopiedProperty(property)
//     setTimeout(() => setCopiedProperty(null), 2000)
//     toast({
//       title: "CSS Property copied",
//       description: `--${property}: ${value}; has been copied to your clipboard.`,
//     })
//   }

//   const copyAllCSSProperties = (colors: ColorShade[]) => {
//     const cssProperties = colors.map((color) => `  --${color.name}: ${color.hex};`).join("\n")
//     navigator.clipboard.writeText(cssProperties)
//     toast({
//       title: "All CSS Properties copied",
//       description: `${colors.length} CSS properties have been copied to your clipboard.`,
//     })
//   }

//   const openDrawer = (colors: ColorShade[], category: string) => {
//     setSelectedColors(colors)
//     setSelectedCategory(category)
//     setDrawerOpen(true)
//   }

//   const exportCSS = () => {
//     if (!colorSystem) return

//     let css = ":root {\n"
//     Object.entries(colorSystem).forEach(([_, colors]) => {
//       colors.forEach((color) => {
//         css += `  --${color.name}: ${color.hex};\n`
//       })
//     })
//     css += "}"

//     const blob = new Blob([css], { type: "text/css" })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement("a")
//     a.href = url
//     a.download = "color-system.css"
//     a.click()
//     URL.revokeObjectURL(url)
//   }

//   useEffect(() => {
//     generateColorSystem()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const ColorSwatch = ({ color }: { color: ColorShade }) => (
//     <div className="group relative">
//       <div
//         className="w-full h-16 rounded-lg border cursor-pointer transition-transform hover:scale-105"
//         style={{ backgroundColor: color.hex }}
//         onClick={() => copyToClipboard(color.hex)}
//       />
//       <div className="mt-2 space-y-1">
//         <div className="flex items-center justify-between">
//           <span className="text-sm font-medium">{color.name}</span>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
//             onClick={() => copyToClipboard(color.hex)}
//           >
//             <Copy className="h-3 w-3" />
//           </Button>
//         </div>
//         <div className="text-xs text-muted-foreground space-y-0.5">
//           <div className="cursor-pointer hover:text-foreground" onClick={() => copyToClipboard(color.hex)}>
//             {color.hex}
//           </div>
//           <div className="cursor-pointer hover:text-foreground" onClick={() => copyToClipboard(color.rgb)}>
//             {color.rgb}
//           </div>
//           <div className="cursor-pointer hover:text-foreground" onClick={() => copyToClipboard(color.hsl)}>
//             {color.hsl}
//           </div>
//         </div>
//       </div>
//     </div>
//   )

//   const ColorSection = ({
//     title,
//     colors,
//     description,
//   }: { title: string; colors: ColorShade[]; description: string }) => (
//     <Card>
//       <CardHeader>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Palette className="h-5 w-5" />
//             <div>
//               <CardTitle>{title}</CardTitle>
//               <CardDescription>{description}</CardDescription>
//             </div>
//           </div>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => openDrawer(colors, title)}
//             className="flex items-center gap-2"
//           >
//             <Code2 className="h-4 w-4" />
//             CSS Properties
//           </Button>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
//           {colors.map((color, index) => (
//             <ColorSwatch key={index} color={color} />
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )

//   return (
//     <div className="min-h-screen bg-background p-4">
//       <div className="max-w-7xl mx-auto space-y-8">
//         <div className="text-center space-y-4">
//           <h1 className="text-4xl font-bold tracking-tight">System Color Generator</h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Genera un sistema completo con tonos 25–950 a partir de tus colores primario, secundario, terciario y
//             neutral.
//           </p>
//         </div>

//         <Card className="max-w-2xl mx-auto">
//           <CardHeader>
//             <CardTitle>Configuración de colores</CardTitle>
//             <CardDescription>
//               Define tus colores base. El tono 500 se usa como base de marca para cada color.
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//               <div className="space-y-2">
//                 <Label htmlFor="primary">Primary Color</Label>
//                 <div className="flex gap-2">
//                   <Input
//                     id="primary"
//                     type="color"
//                     value={primaryColor}
//                     onChange={(e) => setPrimaryColor(e.target.value)}
//                     className="w-16 h-10 p-1 border rounded"
//                   />
//                   <Input
//                     type="text"
//                     value={primaryColor}
//                     onChange={(e) => setPrimaryColor(e.target.value)}
//                     className="flex-1"
//                     placeholder="#3b82f6"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="secondary">Secondary Color</Label>
//                 <div className="flex gap-2">
//                   <Input
//                     id="secondary"
//                     type="color"
//                     value={secondaryColor}
//                     onChange={(e) => setSecondaryColor(e.target.value)}
//                     className="w-16 h-10 p-1 border rounded"
//                   />
//                   <Input
//                     type="text"
//                     value={secondaryColor}
//                     onChange={(e) => setSecondaryColor(e.target.value)}
//                     className="flex-1"
//                     placeholder="#8b5cf6"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="tertiary">Tertiary Color</Label>
//                 <div className="flex gap-2">
//                   <Input
//                     id="tertiary"
//                     type="color"
//                     value={tertiaryColor}
//                     onChange={(e) => setTertiaryColor(e.target.value)}
//                     className="w-16 h-10 p-1 border rounded"
//                   />
//                   <Input
//                     type="text"
//                     value={tertiaryColor}
//                     onChange={(e) => setTertiaryColor(e.target.value)}
//                     className="flex-1"
//                     placeholder="#14b8a6"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="neutral">Neutral Color</Label>
//                 <div className="flex gap-2">
//                   <Input
//                     id="neutral"
//                     type="color"
//                     value={neutralColor}
//                     onChange={(e) => setNeutralColor(e.target.value)}
//                     className="w-16 h-10 p-1 border rounded"
//                   />
//                   <Input
//                     type="text"
//                     value={neutralColor}
//                     onChange={(e) => setNeutralColor(e.target.value)}
//                     className="flex-1"
//                     placeholder="#6b7280"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <Button onClick={generateColorSystem} className="flex-1">
//                 Generar sistema de color
//               </Button>
//               {colorSystem && (
//                 <Button variant="outline" onClick={exportCSS}>
//                   <Download className="h-4 w-4 mr-2" />
//                   Export CSS
//                 </Button>
//               )}
//             </div>
//           </CardContent>
//         </Card>

//         {colorSystem && (
//           <div className="space-y-8">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold">Sistema generado</h2>
//                 <p className="text-muted-foreground">Haz clic en cualquier color para copiar su valor</p>
//               </div>
//               <Badge variant="secondary" className="text-sm">
//                 {Object.values(colorSystem).flat().length} colores generados
//               </Badge>
//             </div>

//             <div className="space-y-6">
//               <ColorSection
//                 title="Primary"
//                 colors={colorSystem.primary}
//                 description="Escala 25–950 (25=muy claro, 950=muy oscuro). 500 = base de marca."
//               />

//               <ColorSection
//                 title="Secondary"
//                 colors={colorSystem.secondary}
//                 description="Escala 25–950 (25=muy claro, 950=muy oscuro). 500 = base de marca."
//               />
//               <ColorSection
//                 title="Tertiary"
//                 colors={colorSystem.tertiary}
//                 description="Escala 25–950 (25=muy claro, 950=muy oscuro). 500 = base de marca."
//               />

//               <ColorSection
//                 title="Neutral"
//                 colors={colorSystem.neutral}
//                 description="Escala 25–950 basada en tu color neutral personalizado."
//               />

//               <ColorSection title="Success" colors={colorSystem.success} description="Verdes semánticos 25–950." />

//               <ColorSection title="Warning" colors={colorSystem.warning} description="Amarillos semánticos 25–950." />

//               <ColorSection title="Error" colors={colorSystem.error} description="Rojos semánticos 25–950." />
//             </div>
//           </div>
//         )}

//         <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
//           <DrawerContent className="max-h-[80vh]">
//             <DrawerHeader>
//               <DrawerTitle className="flex items-center gap-2">
//                 <Code2 className="h-5 w-5" />
//                 CSS Custom Properties - {selectedCategory}
//               </DrawerTitle>
//               <DrawerDescription>Copia propiedades individuales o todas las de esta categoría.</DrawerDescription>
//             </DrawerHeader>
//             <div className="px-4 pb-4 overflow-y-auto">
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-sm font-medium text-muted-foreground">
//                     {selectedColors.length} propiedades disponibles
//                   </h3>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => copyAllCSSProperties(selectedColors)}
//                     className="flex items-center gap-2"
//                   >
//                     <Copy className="h-4 w-4" />
//                     Copy All
//                   </Button>
//                 </div>
//                 <div className="space-y-2">
//                   {selectedColors.map((color, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className="w-6 h-6 rounded border" style={{ backgroundColor: color.hex }} />
//                         <div className="font-mono text-sm">
//                           <span className="text-muted-foreground">--</span>
//                           <span className="font-medium">{color.name}</span>
//                           <span className="text-muted-foreground">: </span>
//                           <span className="text-blue-600">{color.hex}</span>
//                           <span className="text-muted-foreground">;</span>
//                         </div>
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => copyCSSProperty(color.name, color.hex)}
//                         className="h-8 w-8 p-0"
//                         aria-label={`Copiar --${color.name}`}
//                       >
//                         {copiedProperty === color.name ? (
//                           <Check className="h-4 w-4 text-green-600" />
//                         ) : (
//                           <Copy className="h-4 w-4" />
//                         )}
//                       </Button>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-6 p-4 bg-muted/30 rounded-lg">
//                   <h4 className="text-sm font-medium mb-2">Ejemplo de uso:</h4>
//                   <code className="text-xs text-muted-foreground block">
//                     {`/* En tu CSS */\n:root {\n${selectedColors
//                       .slice(0, 3)
//                       .map((color) => `  --${color.name}: ${color.hex};`)
//                       .join(
//                         "\n",
//                       )}\n  /* ... más propiedades */\n}\n\n/* Uso */\n.my-element {\n  background-color: var(--${
//                       selectedColors[0]?.name || "primary-50"
//                     });\n  color: var(--${selectedColors[selectedColors.length - 1]?.name || "primary-950"});\n}`}
//                   </code>
//                 </div>
//               </div>
//             </div>
//           </DrawerContent>
//         </Drawer>
//       </div>
//     </div>
//   )
// }
