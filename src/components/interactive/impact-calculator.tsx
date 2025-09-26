'use client';

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ImpactCalculator = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-2xl">
            Impact Calculator
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Calculate your building or project impact quickly.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Example input section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <Label htmlFor="area">Area (sq.m)</Label>
              <Input id="area" type="number" placeholder="Enter area" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="floors">Number of Floors</Label>
              <Input id="floors" type="number" placeholder="Enter floors" />
            </div>
          </div>

          {/* Add more inputs or sections here */}
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button>Calculate</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ImpactCalculator;