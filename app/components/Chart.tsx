'use client'

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from 'recharts'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { convertFileSize } from '@/lib/utils'

const chartConfig = {
  size: {
    label: 'Size'
  },
  used: {
    label: 'Used',
    color: 'white'
  }
} satisfies ChartConfig

export const Chart = ({ used = 0, total = 2 * 1024 * 1024 * 1024 }: { used: number; total?: number }) => {
  const chartData = [{ name: 'Used', value: used }]

  // Use both used and total for percentage
  const percent = total ? Math.round((used / total) * 100) : 0

  return (
    <Card className="chart w-full max-w-xs">
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="chart-container w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] xl:w-[160px] xl:h-[160px] min-h-0">
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={percent * 3.6 + 90}
            innerRadius="60%"
            outerRadius="80%"
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="polar-grid"
              polarRadius={['70%', '60%']}
            />
            <RadialBar
              dataKey="value"
              fill="black"
              background={{ fill: '#e5e7eb' }}
              cornerRadius={10}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <g>
                        <circle
                          cx={viewBox.cx}
                          cy={viewBox.cy}
                          r={38}
                          stroke="#d1d5db"
                          strokeWidth={5}
                          fill="none"
                          opacity={0.7}
                        />
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="chart-total-percentage"
                          >
                            {percent}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 16}
                            className="fill-white/90 text-xs sm:text-sm font-medium"
                          >
                            Space used
                          </tspan>
                        </text>
                      </g>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardHeader className="chart-details">
        <CardTitle className="chart-title">Available Storage</CardTitle>
        <CardDescription className="chart-description">
          {used ? convertFileSize(used) : '0 B'} / {convertFileSize(total)}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
