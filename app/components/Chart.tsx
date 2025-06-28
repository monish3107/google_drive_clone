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
  const chartData = [{ name: 'Used', value: used, fill: 'white' }]

  // Use both used and total for percentage
  const percent = total ? Math.round((used / total) * 100) : 0

  return (
    <Card className="chart w-full h-full">
      <CardContent className="flex-1 p-0">
        <ChartContainer config={chartConfig} className="chart-container w-full h-full min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
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
            <RadialBar dataKey="value" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="chart-total-percentage text-lg sm:text-xl font-bold"
                        >
                          {percent}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-white/70 text-xs sm:text-sm"
                        >
                          Space used
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardHeader className="chart-details">
        <CardTitle className="chart-title text-base sm:text-lg">Available Storage</CardTitle>
        <CardDescription className="chart-description text-sm sm:text-base">
          {used ? convertFileSize(used) : '2GB'} / {convertFileSize(total)}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
