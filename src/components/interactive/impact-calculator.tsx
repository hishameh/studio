'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Badge } from '../ui/badge';

const formatNumber = (num: number) => Math.round(num).toLocaleString('en-IN');
const IMPRESSIONS_PER_SHOP_PER_MONTH = 6000;

export default function ImpactCalculator() {
  const [userType, setUserType] = useState<'brand' | 'store'>('brand');
  const [shops, setShops] = useState(5); // Now represents number of shops for a brand
  const [shelfSpace, setShelfSpace] = useState(5);

  const brandOutputs = {
    impressions: shops * IMPRESSIONS_PER_SHOP_PER_MONTH,
    reach: shops * IMPRESSIONS_PER_SHOP_PER_MONTH * 0.3, // Example reach calculation
    salesUplift: shops * 0.5, // Example uplift calculation
  };

  const storeOutputs = {
    monthlyIncome: shelfSpace * 1000,
  };

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl">Impact Calculator</CardTitle>
        <CardDescription>Estimate your potential with Alive.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Controls */}
          <div className="space-y-8">
            <div>
              <Label className="text-lg font-semibold">I'm a...</Label>
              <RadioGroup
                value={userType}
                onValueChange={(value) => setUserType(value as 'brand' | 'store')}
                className="mt-2 flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="brand" id="brand" />
                  <Label htmlFor="brand" className="text-base">Brand</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="store" id="store" />
                  <Label htmlFor="store" className="text-base">Kirana Store</Label>
                </div>
              </RadioGroup>
            </div>

            {userType === 'brand' ? (
              <div className="space-y-4">
                <Label htmlFor="shops" className="text-lg font-semibold">
                  Number of Shops: {shops}
                </Label>
                <Slider
                  id="shops"
                  min={1}
                  max={50}
                  step={1}
                  value={[shops]}
                  onValueChange={(value) => setShops(value[0])}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <Label htmlFor="shelf-space" className="text-lg font-semibold">
                  Shelf Space (sq. ft.): {shelfSpace}
                </Label>
                <Slider
                  id="shelf-space"
                  min={1}
                  max={20}
                  step={1}
                  value={[shelfSpace]}
                  onValueChange={(value) => setShelfSpace(value[0])}
                />
              </div>
            )}
          </div>

          {/* Outputs */}
          <div className="rounded-lg bg-secondary p-6">
            <h3 className="text-lg font-semibold mb-4">Your Estimated Monthly Impact:</h3>
            {userType === 'brand' ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Impressions</span>
                  <Badge variant="default" className="text-lg">
                    {formatNumber(brandOutputs.impressions)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Potential Reach</span>
                  <Badge variant="default" className="text-lg">
                    {formatNumber(brandOutputs.reach)} shoppers
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Expected Sales Uplift</span>
                   <Badge variant="default" className="text-lg">
                    ~{brandOutputs.salesUplift.toFixed(1)}%
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Potential Ad Income</span>
                   <Badge variant="default" className="text-lg">
                    ₹{formatNumber(storeOutputs.monthlyIncome)}
                  </Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
