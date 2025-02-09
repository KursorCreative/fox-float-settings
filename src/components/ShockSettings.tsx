import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ShockSettingsProps {
  settings: {
    airPressure: number;
    hsr: number;
    lsr: number;
    hsc: number;
    lsc: number;
  };
}

export const ShockSettings = ({ settings }: ShockSettingsProps) => {
  const settingItems = [
    {
      label: "Air Pressure",
      value: `${settings.airPressure} PSI`,
      tooltip: {
        main: "Base air pressure for your weight and riding style.",
        instruction: "Use a shock pump to set pressure with the bike unweighted."
      },
    },
    {
      label: "High-Speed Rebound (HSR)",
      value: `${settings.hsr} clicks`,
      tooltip: {
        main: "Controls rebound damping at higher shaft speeds.",
        instruction: "Adjust using the red knob on top of shock:",
        direction: "↻ Clockwise (looking down): Increase damping\n↺ Counter-clockwise: Decrease"
      },
    },
    {
      label: "Low-Speed Rebound (LSR)",
      value: `${settings.lsr} clicks`,
      tooltip: {
        main: "Controls rebound damping at lower shaft speeds.",
        instruction: "Adjust using the inner red knob on top:",
        direction: "↻ Clockwise (looking down): Increase damping\n↺ Counter-clockwise: Decrease"
      },
    },
    {
      label: "High-Speed Compression (HSC)",
      value: `${settings.hsc} clicks`,
      tooltip: {
        main: "Controls compression damping during big hits.",
        instruction: "Adjust using the outer blue knob on bottom:",
        direction: "↻ Clockwise (looking up): Increase damping\n↺ Counter-clockwise: Decrease"
      },
    },
    {
      label: "Low-Speed Compression (LSC)",
      value: `${settings.lsc} clicks`,
      tooltip: {
        main: "Controls compression damping during small bumps.",
        instruction: "Adjust using the inner blue knob on bottom:",
        direction: "↻ Clockwise (looking up): Increase damping\n↺ Counter-clockwise: Decrease"
      },
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recommended Settings</h3>
        <Badge variant="secondary">Base Setup</Badge>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {settingItems.map((item) => (
          <Card key={item.label} className="p-4 transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[300px] space-y-2 p-4">
                        <p className="font-medium">{item.tooltip.main}</p>
                        <p className="text-sm text-muted-foreground">{item.tooltip.instruction}</p>
                        {item.tooltip.direction && (
                          <p className="text-sm text-muted-foreground whitespace-pre-line">{item.tooltip.direction}</p>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-2xl font-semibold text-fox-orange">{item.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <p className="text-sm text-muted-foreground">
          💡 Pro tip: Start with these settings and adjust based on feel. For rocky terrain,
          try decreasing LSC by 1-2 clicks. For smoother trails, you can increase HSR
          slightly for more pop.
        </p>
      </div>
    </div>
  );
};