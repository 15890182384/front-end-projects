import { CSSRuleObject, KeyValuePair } from "tailwindcss/types/config"

export function createUnit(unit = "") {
    // 1rem = 100px  
    let spacing: Record<string, string> = {}
    for (let i = 0; i < 2000; i++) {
        if (unit === "px") {
            spacing[i + 1] = (i + 1) + unit
        } else {
            spacing[i + 1] = (i + 1) / 100 + unit
        }
    }
    return spacing
}
export type UtilitiesValue = (value: string, extra: { modifier: string | null }) => CSSRuleObject | null
export type UtilitiesArgs = [KeyValuePair<string, UtilitiesValue>, Record<string, string>]
export type UtilitiesOptions = KeyValuePair<string, UtilitiesArgs>
export const tailWindUtilities: UtilitiesOptions = {
    borderTop: [
        {
            borderTop: (value: string) => {
                return {
                    "border-top": `1px solid ${value}`
                }
            }
        },
        {}
    ],
    borderBottom: [
        {
            borderBottom: (value: string) => {
                return {
                    "border-top": `1px solid ${value}`
                }
            }
        }, {}
    ],
    borderAll: [
        {
            borderAll: (value: string) => {
                return {
                    "border": `1px solid ${value}`
                }
            }
        },
        {}
    ],
    textHiding: [
        {
            textHiding: (value: string) => {
                return {
                    "word-wrap": "break-word",
                    "word-break": "break-all",
                    "overflow": "hidden",
                    "text-overflow": "ellipsis",
                    "-webkit-line-clamp": value,
                    "display": "-webkit-box",
                    "-webkit-box-orient": "vertical"
                }
            }
        },
        {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
        }
    ]
}